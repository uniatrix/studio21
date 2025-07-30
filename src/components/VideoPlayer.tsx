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
  const [isVideoReady, setIsVideoReady] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const startTimeRef = useRef<number>(0);
  const pausedTimeRef = useRef<number>(0);

  const handlePlay = () => {
    setIsPlaying(true);
    setIsLoading(true);

    // Start preloading immediately when play is clicked
    if (videoRef.current) {
      videoRef.current.load();
    }
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

  const handleCanPlay = () => {
    setIsVideoReady(true);
    // Reduce loading time perception
    setTimeout(() => {
      setIsLoading(false);
    }, 200);
  };

  const handleLoadedData = () => {
    // Video has loaded enough data to start playing
    setIsVideoReady(true);
  };

  const handleVideoPlay = () => {
    setIsVideoPlaying(true);
    setIsLoading(false);
    startProgressAnimation();
  };

  const handleVideoPause = () => {
    setIsVideoPlaying(false);
    // Store the current elapsed time when pausing
    pausedTimeRef.current = (Date.now() - startTimeRef.current) / 1000;
    stopProgressAnimation();
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setIsVideoPlaying(false);
    setCurrentTime(0);
    setProgressWidth(0);
    startTimeRef.current = 0;
    pausedTimeRef.current = 0;
    stopProgressAnimation();
  };

  const startProgressAnimation = () => {
    if (progressIntervalRef.current) {
      clearInterval(progressIntervalRef.current);
    }

    const totalDuration = 126; // 2:06 minutes in seconds
    const fastPhase = 15; // First 15 seconds fill more naturally

    // If this is the first time playing, set start time. Otherwise, adjust for paused time
    if (startTimeRef.current === 0) {
      startTimeRef.current = Date.now();
    } else {
      // Adjust start time to account for the time that was paused
      startTimeRef.current = Date.now() - pausedTimeRef.current * 1000;
    }

    progressIntervalRef.current = setInterval(() => {
      const elapsed = (Date.now() - startTimeRef.current) / 1000;

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

  // Preload video on component mount for faster loading
  useEffect(() => {
    if (videoRef.current) {
      // Set up video for faster loading
      videoRef.current.preload = "auto";

      // Start loading the video metadata immediately
      const video = videoRef.current;
      video.load();

      // Prefetch some video data
      const handleCanPlayThrough = () => {
        setIsVideoReady(true);
      };

      video.addEventListener("canplaythrough", handleCanPlayThrough);

      return () => {
        video.removeEventListener("canplaythrough", handleCanPlayThrough);
      };
    }
  }, [videoSrc]);

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
        // Thumbnail with subtle attention-grabbing elements
        <div className="relative cursor-pointer group" onClick={handlePlay}>
          <img
            src={thumbnailSrc}
            alt={alt}
            className="w-full aspect-video object-cover rounded-2xl"
            loading="lazy"
            decoding="async"
          />

          {/* Enhanced gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 rounded-2xl"></div>

          {/* Subtle pulsing border */}
          <div className="absolute inset-0 rounded-2xl border-2 border-red-500/40 animate-pulse"></div>

          {/* Enhanced Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              {/* Subtle glow effect */}
              <div className="absolute inset-0 bg-red-500/20 rounded-full blur-lg animate-pulse scale-125"></div>
              {/* Main button */}
              <div className="relative bg-gradient-to-br from-red-500 to-red-600 hover:from-red-400 hover:to-red-500 rounded-full p-4 md:p-6 shadow-2xl transform transition-all duration-300 group-hover:scale-110">
                <Play
                  className="w-8 h-8 md:w-12 md:h-12 text-white ml-1"
                  fill="currentColor"
                />
              </div>
            </div>
          </div>

          {/* Attention-grabbing top badge */}
          <div className="absolute top-4 left-1/2 bg-gradient-to-r from-red-600 to-red-500 text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wide shadow-lg scale-pulse">
            WATCH NOW
          </div>

          {/* Bottom call-to-action */}
          <div className="absolute bottom-4 left-4 bg-black/80 text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
            My Success Story
          </div>

          {/* Duration indicator */}
          <div className="absolute bottom-4 right-4 bg-black/80 text-white px-2 py-1 rounded text-xs font-medium backdrop-blur-sm">
            2:06
          </div>
        </div>
      ) : (
        // Custom Video player without scrub bar
        <div className="relative rounded-2xl overflow-hidden">
          <video
            ref={videoRef}
            src={videoSrc}
            autoPlay
            preload="auto"
            playsInline
            muted={isMuted}
            className="w-full aspect-video object-cover"
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleLoadedMetadata}
            onLoadedData={handleLoadedData}
            onCanPlay={handleCanPlay}
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
