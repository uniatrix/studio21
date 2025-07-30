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

  // Aggressive preloading for fastest possible loading
  useEffect(() => {
    if (videoRef.current) {
      const video = videoRef.current;

      // Set up for maximum loading speed
      video.preload = "auto";
      video.crossOrigin = "anonymous";

      // Start loading immediately
      video.load();

      // Multiple event listeners for faster detection
      const handleCanPlay = () => setIsVideoReady(true);
      const handleCanPlayThrough = () => setIsVideoReady(true);
      const handleLoadedData = () => setIsVideoReady(true);

      video.addEventListener("canplay", handleCanPlay);
      video.addEventListener("canplaythrough", handleCanPlayThrough);
      video.addEventListener("loadeddata", handleLoadedData);

      // Prefetch by seeking to start
      const handleLoadedMetadata = () => {
        video.currentTime = 0.1; // Seek slightly forward to trigger buffering
        video.currentTime = 0; // Reset to start
      };

      video.addEventListener("loadedmetadata", handleLoadedMetadata);

      return () => {
        video.removeEventListener("canplay", handleCanPlay);
        video.removeEventListener("canplaythrough", handleCanPlayThrough);
        video.removeEventListener("loadeddata", handleLoadedData);
        video.removeEventListener("loadedmetadata", handleLoadedMetadata);
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
        // Thumbnail with attention-grabbing elements
        <div
          className="relative cursor-pointer group video-thumbnail-glow"
          onClick={handlePlay}
        >
          <img
            src={thumbnailSrc}
            alt={alt}
            className="w-full aspect-video object-cover rounded-2xl"
            loading="eager"
            decoding="sync"
          />

          {/* Animated gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 rounded-2xl"></div>

          {/* Pulsing border effect */}
          <div className="absolute inset-0 rounded-2xl border-4 border-red-500/60 animate-pulse"></div>

          {/* Animated corner indicators */}
          <div className="absolute top-2 left-2 w-6 h-6 border-l-4 border-t-4 border-red-500 animate-pulse"></div>
          <div className="absolute top-2 right-2 w-6 h-6 border-r-4 border-t-4 border-red-500 animate-pulse"></div>
          <div className="absolute bottom-2 left-2 w-6 h-6 border-l-4 border-b-4 border-red-500 animate-pulse"></div>
          <div className="absolute bottom-2 right-2 w-6 h-6 border-r-4 border-b-4 border-red-500 animate-pulse"></div>

          {/* Enhanced Play Button with glow effect */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative video-float">
              {/* Multiple glowing rings */}
              <div className="absolute inset-0 bg-red-500/20 rounded-full blur-2xl animate-ping scale-200"></div>
              <div className="absolute inset-0 bg-yellow-400/20 rounded-full blur-xl animate-pulse scale-175"></div>
              <div className="absolute inset-0 bg-red-500/30 rounded-full blur-xl animate-pulse scale-150"></div>
              {/* Main button */}
              <div className="relative bg-gradient-to-br from-red-500 to-red-600 hover:from-red-400 hover:to-red-500 rounded-full p-8 shadow-2xl transform transition-all duration-300 group-hover:scale-125 animate-bounce border-4 border-white/20">
                <Play
                  className="w-16 h-16 text-white ml-2"
                  fill="currentColor"
                />
              </div>
              {/* Rotating ring around button */}
              <div className="absolute inset-0 border-4 border-transparent border-t-yellow-400 border-r-yellow-400 rounded-full animate-spin scale-125"></div>
            </div>
          </div>

          {/* Attention-grabbing top banner */}
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-red-600 to-red-500 text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wide shadow-lg animate-pulse">
            ?? WATCH NOW - FREE ??
          </div>

          {/* Bottom call-to-action */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/80 text-white px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
            ?? Click to Discover My Secret
          </div>

          {/* Floating elements for extra attention */}
          <div
            className="absolute top-1/4 left-4 text-yellow-400 text-2xl animate-bounce"
            style={{ animationDelay: "0.5s" }}
          >
            ?
          </div>
          <div
            className="absolute top-1/3 right-6 text-yellow-400 text-xl animate-bounce"
            style={{ animationDelay: "1s" }}
          >
            ??
          </div>
          <div
            className="absolute bottom-1/3 left-6 text-green-400 text-xl animate-bounce"
            style={{ animationDelay: "1.5s" }}
          >
            ??
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
            // Optimization attributes
            crossOrigin="anonymous"
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
