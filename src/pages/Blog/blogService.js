/**
 * Configuration for the GitHub repository
 */
const BLOG_CONFIG = {
  owner: 'mlawyerlegalconsultation',
  repo: 'mlawyer-blog-files',
  branch: 'main'
};

/**
 * Fetches the list of all published blogs from the repository's index.json
 */
export async function getAllBlogs(githubToken = null) {
  const { owner, repo, branch } = BLOG_CONFIG;
  const primaryUrl = `https://raw.githubusercontent.com/${owner}/${repo}/${branch}/index.json`;
  const fallbackUrl = `https://api.github.com/repos/${owner}/${repo}/contents/index.json`;

  try {
    // Check localStorage first for basic caching
    const cached = localStorage.getItem('blog_index_cache');
    if (cached) {
      const { data, timestamp } = JSON.parse(cached);
      // Cache for 1 hour
      if (Date.now() - timestamp < 3600000) {
        return data;
      }
    }

    let response = await fetch(primaryUrl);
    if (!response.ok && githubToken) {
      response = await fetch(fallbackUrl, {
        headers: {
          'Accept': 'application/vnd.github.v3.raw',
          'Authorization': `token ${githubToken}`
        }
      });
    }

    if (!response.ok) {
      if (response.status === 404) return [];
      throw new Error(`Error fetching blogs: ${response.statusText}`);
    }

    const data = await response.json();

    // Update cache
    localStorage.setItem('blog_index_cache', JSON.stringify({
      data,
      timestamp: Date.now()
    }));

    return data;
  } catch (error) {
    console.error('Failed to fetch blog list:', error);
    // Fallback to cache if exists even if expired
    const cached = localStorage.getItem('blog_index_cache');
    if (cached) return JSON.parse(cached).data;
    return [];
  }
}

/**
 * Fetches the raw markdown content of a specific blog post
 */
export async function getBlogContent(slug, githubToken = null) {
  const { owner, repo, branch } = BLOG_CONFIG;
  const primaryUrl = `https://raw.githubusercontent.com/${owner}/${repo}/${branch}/blogs/${slug}.md`;
  const fallbackUrl = `https://api.github.com/repos/${owner}/${repo}/contents/blogs/${slug}.md`;

  try {
    // Check localStorage cache
    const cachedKey = `blog_content_${slug}`;
    const cached = localStorage.getItem(cachedKey);
    if (cached) {
      const { data, timestamp } = JSON.parse(cached);
      // Cache for 24 hours for content
      if (Date.now() - timestamp < 86400000) {
        return data;
      }
    }

    let response = await fetch(primaryUrl);
    if (!response.ok && response.status !== 404 && githubToken) {
      response = await fetch(fallbackUrl, {
        headers: {
          'Accept': 'application/vnd.github.v3.raw',
          'Authorization': `token ${githubToken}`
        }
      });
    }

    if (!response.ok) {
      if (response.status === 404) return null;
      throw new Error(`Error fetching blog content: ${response.statusText}`);
    }

    const markdownContent = await response.text();

    let result = {
      rawFrontmatter: null,
      content: markdownContent,
      rawTotal: markdownContent
    };

    const match = markdownContent.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
    if (match) {
      result = {
        rawFrontmatter: match[1],
        content: match[2].trim(),
        rawTotal: markdownContent
      };
    }

    // Update cache
    localStorage.setItem(cachedKey, JSON.stringify({
      data: result,
      timestamp: Date.now()
    }));

    return result;
  } catch (error) {
    console.error(`Failed to fetch blog ${slug}:`, error);
    const cachedKey = `blog_content_${slug}`;
    const cached = localStorage.getItem(cachedKey);
    if (cached) return JSON.parse(cached).data;
    return null;
  }
}
