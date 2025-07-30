import { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import LoadingSpinner from "./LoadingSpinner";

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
  const [isLoading, setIsLoading] = useState(false);
  const [progressWidth, setProgressWidth] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const handlePlay = () => {
    setIsPlaying(true);
    setIsLoading(true);
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
    setIsLoading(false);
    startProgressAnimation();
  };

  const handleVideoPause = () => {
    setIsVideoPlaying(false);
    stopProgressAnimation();
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setIsVideoPlaying(false);
    setCurrentTime(0);
    setProgressWidth(0);
    stopProgressAnimation();
  };

  const startProgressAnimation = () => {
    if (progressIntervalRef.current) {
      clearInterval(progressIntervalRef.current);
    }

    const totalDuration = 126; // 2:06 minutes in seconds
    const fastPhase = 15; // First 15 seconds fill more naturally
    const startTime = Date.now();

    progressIntervalRef.current = setInterval(() => {
      const elapsed = (Date.now() - startTime) / 1000;

      if (elapsed <= fastPhase) {
        // Fast phase: fill up to 60% in first 15 seconds with easing
        const progress = elapsed / fastPhase;
        // Apply easing function for more natural feel
        const easedProgress = 1 - Math.pow(1 - progress, 2);
        setProgressWidth(Math.min(easedProgress * 60, 60));
      } else {
        // Slow phase: fill remaining 40% over the remaining time
        const remainingTime = totalDuration - fastPhase;
        const remainingElapsed = elapsed - fastPhase;
        const remainingProgress = remainingElapsed / remainingTime;
        // Smoother transition with slight easing
        const easedRemainingProgress = remainingProgress * remainingProgress;
        setProgressWidth(Math.min(60 + easedRemainingProgress * 40, 100));
      }

      // Stop when we reach the end
      if (elapsed >= totalDuration) {
        setProgressWidth(100);
        clearInterval(progressIntervalRef.current!);
      }
    }, 150);
  };

  const stopProgressAnimation = () => {
    if (progressIntervalRef.current) {
      clearInterval(progressIntervalRef.current);
      progressIntervalRef.current = null;
    }
  };

  // Cleanup interval on unmount
  useEffect(() => {
    return () => {
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }
    };
  }, []);

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
            loading="lazy"
            decoding="async"
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
            preload="metadata"
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

          {/* Loading Spinner */}
          {isLoading && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <LoadingSpinner className="text-white" />
            </div>
          )}

          {/* Click overlay for play/pause */}
          <div
            className="absolute inset-0 cursor-pointer"
            onClick={togglePlayPause}
          />

          {/* Progress Bar */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
            <div
              className="h-full bg-white transition-all duration-100 ease-linear"
              style={{ width: `${progressWidth}%` }}
            />
          </div>

          {/* Custom Controls Overlay */}
          <div className="absolute bottom-2 right-0 p-4 z-10">
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
