import React, { useState } from 'react';
import ReactPlayer from 'react-player';

const VideoGallery = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const videos = [
    'https://youtu.be/BV2ymCz747E?si=ayE9-0G06Ah8NwpZ',
    'https://youtu.be/Frww4EP1ws8?si=4AuhcBdL_XtZZnG4',
    'https://youtu.be/Frww4EP1ws8?si=1gWakDttxvXJwGc7',
    'https://youtu.be/BV2ymCz747E?si=ayE9-0G06Ah8NwpZ',
    'https://youtu.be/Frww4EP1ws8?si=4AuhcBdL_XtZZnG4',
    'https://youtu.be/BV2ymCz747E?si=ayE9-0G06Ah8NwpZ'
  ];

  const handleVideoClick = (video) => {
    setSelectedVideo(video);
  };

  const handleClose = () => {
    setSelectedVideo(null);
  };

  return (
    <div className="py-10">
      <h2 className="text-3xl font-bold text-center mb-8">Video Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
        {videos.map((video, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-lg relative">
            <img
              src={`https://img.youtube.com/vi/${video.split('/').pop().split('?')[0]}/0.jpg`}
              alt="Video Thumbnail"
              className="w-full h-full object-cover cursor-pointer"
              onClick={() => handleVideoClick(video)}
            />
            {selectedVideo === video && (
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
                <ReactPlayer
                  url={video}
                  controls
                  width="90%"
                  height="90%"
                  onClick={handleClose}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoGallery;
