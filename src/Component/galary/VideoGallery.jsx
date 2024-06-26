import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import {VideoGalleryLink} from "../../constants/imageConstant"

const VideoGallery = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const videos = [
    
    VideoGalleryLink.V1,
    VideoGalleryLink.V2,
    VideoGalleryLink.V3,
    VideoGalleryLink.V4,
    VideoGalleryLink.V5,
    VideoGalleryLink.V6,
    VideoGalleryLink.V7,
    VideoGalleryLink.V8,
    VideoGalleryLink.V9,
    // VideoGalleryLink.V10,
    // VideoGalleryLink.V11,
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
