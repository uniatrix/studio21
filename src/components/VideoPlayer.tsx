import { useState, useRef } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

interface VideoPlayerProps {
  videoSrc: string;
  thumbnailSrc: string;
  alt: string;
  className?: string;
}

const VideoPlayer = ({
  videoSrc,
  thumbnailSrc,
  alt,
  className = "",
}: VideoPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const handleVideoPlay = () => {
    setIsVideoPlaying(true);
  };

  const handleVideoPause = () => {
    setIsVideoPlaying(false);
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setIsVideoPlaying(false);
    setCurrentTime(0);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className={`relative ${className}`}>
      {!isPlaying ? (
        // Thumbnail with play button
        <div className="relative cursor-pointer group" onClick={handlePlay}>
          <img
            src={thumbnailSrc}
            alt={alt}
            className="w-full aspect-video object-cover rounded-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>

          {/* Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white/90 hover:bg-white rounded-full p-6 shadow-2xl transform transition-all duration-300 group-hover:scale-110">
              <Play className="w-12 h-12 text-black ml-1" fill="currentColor" />
            </div>
          </div>

          {/* Video indicator */}
          <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
            Click Here To Watch My Story
          </div>
        </div>
      ) : (
        // Custom Video player without scrub bar
        <div className="relative rounded-2xl overflow-hidden">
          <video
            ref={videoRef}
            src={videoSrc}
            autoPlay
            className="w-full aspect-video object-cover"
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleLoadedMetadata}
            onPlay={handleVideoPlay}
            onPause={handleVideoPause}
            onEnded={handleEnded}
            // Disable right-click context menu
            onContextMenu={(e) => e.preventDefault()}
            // Disable keyboard shortcuts
            onKeyDown={(e) => e.preventDefault()}
          >
            Your browser does not support the video tag.
          </video>

          {/* Click overlay for play/pause */}
          <div
            className="absolute inset-0 cursor-pointer"
            onClick={togglePlayPause}
          />

          {/* Custom Controls Overlay */}
          <div className="absolute bottom-0 right-0 p-4 z-10">
            <div className="flex items-center text-white">
              {/* Mute Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleMute();
                }}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
              >
                {isMuted ? (
                  <VolumeX className="w-5 h-5" />
                ) : (
                  <Volume2 className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
