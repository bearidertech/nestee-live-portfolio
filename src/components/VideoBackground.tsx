import React from "react";

interface VideoBackgroundProps {
  videoUrl: string;
  fallbackImage?: string;
}

const VideoBackground = ({ videoUrl, fallbackImage }: VideoBackgroundProps) => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
        poster={fallbackImage}
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Gradient overlay */}
      <div className="absolute inset-0 hero-gradient" />
    </div>
  );
};

export default VideoBackground;