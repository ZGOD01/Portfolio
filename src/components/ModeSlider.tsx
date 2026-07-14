"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type KeyboardEvent,
} from "react";

import {
  animate,
  motion,
  useMotionValue,
  useTransform,
} from "framer-motion";

export type AboutMode =
  | "personal"
  | "professional";

interface ModeSliderProps {
  mode: AboutMode;
  onChange: (mode: AboutMode) => void;
}

/* Slider dimensions */
const TRACK_WIDTH = 340;
const TRACK_HEIGHT = 60;
const THUMB_SIZE = 44;
const TRACK_PADDING = 8;

/*
 * The user must drag the button across
 * at least 65% of the track.
 */
const SWITCH_THRESHOLD = 0.65;

export default function ModeSlider({
  mode,
  onChange,
}: ModeSliderProps) {
  const trackRef =
    useRef<HTMLDivElement>(null);

  const isSwitchingRef = useRef(false);

  const resetTimerRef = useRef<any>(undefined);

  const [trackWidth, setTrackWidth] =
    useState(TRACK_WIDTH);

  const [isSwitching, setIsSwitching] =
    useState(false);

  /*
   * The circular button always starts
   * from the left side.
   */
  const x = useMotionValue(0);

  const maxDrag = Math.max(
    0,
    trackWidth -
    THUMB_SIZE -
    TRACK_PADDING * 2
  );

  /*
   * Red fill remains hidden in the
   * default left position.
   */
  const fillWidth = useTransform(
    x,
    (currentX) => {
      if (currentX <= 1) {
        return 0;
      }

      return currentX + THUMB_SIZE / 2;
    }
  );

  /*
   * The text fades as the red fill
   * moves over it.
   */
  const textOpacity = useTransform(
    x,
    [
      0,
      Math.max(maxDrag * 0.35, 1),
      Math.max(maxDrag * 0.7, 2),
      Math.max(maxDrag, 3),
    ],
    [1, 0.85, 0.3, 0.1]
  );

  /*
   * Right-facing arrow at the beginning.
   * Left-facing arrow at the end.
   */
  const arrowRotation = useTransform(
    x,
    [0, Math.max(maxDrag, 1)],
    [0, 180]
  );

  /*
   * Measure the actual width so dragging
   * works properly on smaller screens.
   */
  useEffect(() => {
    const track = trackRef.current;

    if (!track) return;

    const updateWidth = () => {
      setTrackWidth(
        track.getBoundingClientRect().width
      );
    };

    updateWidth();

    const observer =
      new ResizeObserver(updateWidth);

    observer.observe(track);

    return () => {
      observer.disconnect();
    };
  }, []);

  /*
   * Clear delayed reset when the
   * component is removed.
   */
  useEffect(() => {
    return () => {
      if (resetTimerRef.current) {
        window.clearTimeout(
          resetTimerRef.current
        );
      }
    };
  }, []);

  /*
   * Return the button to its original
   * left-side appearance.
   */
  const resetSlider = useCallback(() => {
    animate(x, 0, {
      type: "spring",
      stiffness: 360,
      damping: 34,
      mass: 0.7,

      onComplete: () => {
        isSwitchingRef.current = false;
        setIsSwitching(false);
      },
    });
  }, [x]);

  /*
   * Complete the slide, change the page,
   * then restore the slider to the left.
   */
  const switchPage = useCallback(() => {
    if (isSwitchingRef.current) {
      return;
    }

    isSwitchingRef.current = true;
    setIsSwitching(true);

    const nextMode: AboutMode =
      mode === "professional"
        ? "personal"
        : "professional";

    animate(x, maxDrag, {
      type: "spring",
      stiffness: 340,
      damping: 32,
      mass: 0.72,

      onComplete: () => {
        /*
         * Change the currently visible page.
         */
        onChange(nextMode);

        /*
         * Keep the completed slider visible
         * briefly, then reset it.
         */
        resetTimerRef.current =
          window.setTimeout(() => {
            resetSlider();
          }, 160);
      },
    });
  }, [
    maxDrag,
    mode,
    onChange,
    resetSlider,
    x,
  ]);

  const handleDragStart = () => {
    if (isSwitchingRef.current) {
      return;
    }

    x.stop();
  };

  const handleDragEnd = () => {
    if (isSwitchingRef.current) {
      return;
    }

    const currentPosition = x.get();

    const requiredPosition =
      maxDrag * SWITCH_THRESHOLD;

    if (
      currentPosition >= requiredPosition
    ) {
      switchPage();
    } else {
      resetSlider();
    }
  };

  const handleKeyboard = (
    event: KeyboardEvent<HTMLDivElement>
  ) => {
    if (isSwitchingRef.current) {
      return;
    }

    if (
      event.key === "Enter" ||
      event.key === " " ||
      event.key === "ArrowRight"
    ) {
      event.preventDefault();
      switchPage();
      return;
    }

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      resetSlider();
    }
  };

  // Text reflects the current mode being shown
  const sliderText =
    mode === "personal"
      ? "Slide to Personal Mode"
      : "Slide to Professional Mode";

  return (
    <div
      ref={trackRef}
      role="switch"
      tabIndex={0}
      aria-checked={mode === "personal"}
      aria-label={sliderText}
      onKeyDown={handleKeyboard}
      className="
        relative
        w-[340px]
        max-w-[calc(100vw-32px)]
        select-none
        overflow-hidden
        outline-none
      "
      style={{
        height: TRACK_HEIGHT,
        borderRadius: TRACK_HEIGHT / 2,
        backgroundColor: "#F8F8F8",
        border: "1px solid #DEDEDE",
        boxShadow:
          "0 1px 4px rgba(0,0,0,0.025), inset 0 1px 2px rgba(0,0,0,0.02)",
        cursor: isSwitching
          ? "default"
          : "grab",
        WebkitTapHighlightColor:
          "transparent",
      }}
    >
      {/* Red sliding background */}
      <motion.div
        style={{
          width: fillWidth,
          position: "absolute",
          left: TRACK_PADDING,
          top: TRACK_PADDING,
          height: THUMB_SIZE,
          borderRadius: THUMB_SIZE / 2,
          backgroundColor: "#F3322C",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      {/* Text */}
      <div
        style={{
          position: "absolute",
          left:
            THUMB_SIZE +
            TRACK_PADDING +
            20,
          right: TRACK_PADDING + 12,
          top: 0,
          bottom: 0,
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
          pointerEvents: "none",
          zIndex: 2,
        }}
      >
        <motion.div
          key={sliderText}
          initial={{
            opacity: 0,
            y: 2,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.28,
            ease: "easeOut",
          }}
          style={{
            position: "relative",
            display: "inline-flex",
            alignItems: "center",
            whiteSpace: "nowrap",
            fontFamily:
              '"Stack Sans Notch", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
            fontSize: "16.5px",
            fontWeight: 300,
            letterSpacing: "-0.04em",
            lineHeight: 1,
          }}
        >
          {/* Default grey text */}
          <motion.span
            style={{
              opacity: textOpacity,
              color: "#A2A2A2",
              whiteSpace: "nowrap",
            }}
          >
            {sliderText}
          </motion.span>

          {/* Moving red shimmer */}
          <motion.span
            aria-hidden="true"
            animate={{
              backgroundPosition: [
                "180% 50%",
                "-80% 50%",
              ],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              repeatDelay: 0.35,
              ease: "linear",
            }}
            style={{
              position: "absolute",
              inset: 0,
              whiteSpace: "nowrap",
              pointerEvents: "none",
              backgroundImage:
                "linear-gradient(110deg, transparent 20%, rgba(243,50,44,0.08) 38%, rgba(243,50,44,0.72) 50%, rgba(243,50,44,0.08) 62%, transparent 80%)",
              backgroundSize: "220% 100%",
              backgroundRepeat: "no-repeat",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor:
                "transparent",
              color: "transparent",
            }}
          >
            {sliderText}
          </motion.span>
        </motion.div>
      </div>

      {/* Draggable circular button */}
      <motion.div
        drag={isSwitching ? false : "x"}
        dragConstraints={{
          left: 0,
          right: maxDrag,
        }}
        dragElastic={0}
        dragMomentum={false}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        whileDrag={{
          cursor: "grabbing",
          scale: 1.02,
        }}
        style={{
          x,
          position: "absolute",
          left: TRACK_PADDING,
          top: TRACK_PADDING,
          width: THUMB_SIZE,
          height: THUMB_SIZE,
          borderRadius: "50%",
          backgroundColor: "#FFFFFF",
          border: "1px solid #DFDFDF",
          boxShadow:
            "0 2px 7px rgba(0,0,0,0.09), 0 1px 2px rgba(0,0,0,0.04)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: isSwitching
            ? "default"
            : "grab",
          touchAction: "none",
          zIndex: 4,
        }}
      >
        <motion.svg
          style={{
            rotate: arrowRotation,
          }}
          width="22"
          height="22"
          viewBox="0 0 28 28"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M5 14H22.5"
            stroke="#F3322C"
            strokeWidth="2.2"
            strokeLinecap="round"
          />

          <path
            d="M16 7.5L22.5 14L16 20.5"
            stroke="#F3322C"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.svg>
      </motion.div>
    </div>
  );
}