/**
 * Fetches the list of all published blogs from the repository's index.json
 * Configuration for the GitHub repository
 */
const BLOG_CONFIG = {
  owner: 'mlawyerlegalconsultation', // User should replace this if needed
  repo: 'mlawyer-blog-files', // User should replace this if needed
  branch: 'main'
};

/**
 * Fetches the list of all published blogs from the repository's index.json
 */
export async function getAllBlogs(githubToken = null) {
  const { owner, repo } = BLOG_CONFIG;
  const url = `https://api.github.com/repos/${owner}/${repo}/contents/index.json`;
  
  const headers = {
    'Accept': 'application/vnd.github.v3.raw',
    'If-None-Match': '' // Bypass CDN/browser caching
  };

  if (githubToken) {
    headers['Authorization'] = `token ${githubToken}`;
  }

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

    const response = await fetch(url, { headers });
    
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
  const { owner, repo } = BLOG_CONFIG;
  const url = `https://api.github.com/repos/${owner}/${repo}/contents/blogs/${slug}.md`;
  
  const headers = {
    'Accept': 'application/vnd.github.v3.raw',
    'If-None-Match': ''
  };

  if (githubToken) {
    headers['Authorization'] = `token ${githubToken}`;
  }

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

    const response = await fetch(url, { headers });
    
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
