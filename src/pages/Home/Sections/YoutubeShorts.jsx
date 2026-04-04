const shorts = [
  { id: 'short-1', videoId: 'nZFaPhtzID0', title: 'How it works' },
  { id: 'short-2', videoId: 'nZFaPhtzID0', title: 'How to connect Advocates' },
  { id: 'short-3', videoId: 'nZFaPhtzID0', title: 'How to book a consultation' },
  { id: 'short-4', videoId: 'nZFaPhtzID0', title: 'For Advocates' },
];

const YoutubeShorts = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
            See How It <span className="text-secondary">Works</span>
          </h2>
          <p className="mt-3 text-gray-600 dark:text-gray-400 text-lg max-w-xl mx-auto">
            Watch quick demos of MLawyer in action
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {shorts.map((short) => (
            <div
              key={short.id}
              className="flex flex-col items-center gap-3 rounded-2xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 p-3 w-55 sm:w-60"
            >
              <div className="w-full rounded-xl overflow-hidden" style={{ aspectRatio: '9/16' }}>
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${short.videoId}?autoplay=1&mute=1&playsinline=1&loop=1&playlist=${short.videoId}&rel=0&modestbranding=1`}
                  title={short.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
                {short.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default YoutubeShorts;
