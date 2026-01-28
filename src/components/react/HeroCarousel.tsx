import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Slide {
  tag: string;
  title: string;
  subtitle: string;
  cta: { text: string; href: string };
}

interface Props {
  slides: Slide[];
  interval?: number;
}

const gridPatternSvg =
  "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")";

const slideVariants = {
  enter: {
    opacity: 0,
    y: 20,
  },
  center: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: -20,
  },
};

export default function HeroCarousel({ slides, interval = 6000 }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const progressRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const startTimeRef = useRef<number>(Date.now());

  const clearTimers = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    if (progressRef.current) {
      clearInterval(progressRef.current);
      progressRef.current = null;
    }
  }, []);

  const startTimer = useCallback(() => {
    clearTimers();
    startTimeRef.current = Date.now();
    setProgress(0);

    // Progress update at ~60fps
    progressRef.current = setInterval(() => {
      const elapsed = Date.now() - startTimeRef.current;
      const pct = Math.min(elapsed / interval, 1);
      setProgress(pct);
    }, 16);

    timerRef.current = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, interval);
  }, [clearTimers, interval, slides.length]);

  useEffect(() => {
    if (!isPaused) {
      startTimer();
    } else {
      clearTimers();
    }

    return clearTimers;
  }, [currentIndex, isPaused, startTimer, clearTimers]);

  const goToSlide = useCallback(
    (index: number) => {
      setCurrentIndex(index);
      setProgress(0);
      // Timer restarts via the useEffect dependency on currentIndex
    },
    []
  );

  const currentSlide = slides[currentIndex];

  return (
    <section
      className="relative overflow-hidden py-24 lg:py-36"
      style={{ backgroundColor: "#00313C" }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] rounded-full blur-3xl"
          style={{ backgroundColor: "#00A25F" }}
        />
        <div
          className="absolute -bottom-1/2 -left-1/4 w-[600px] h-[600px] rounded-full blur-3xl"
          style={{ backgroundColor: "#2A5B66" }}
        />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{ backgroundImage: gridPatternSvg }}
      />

      {/* Content area */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {/* Tag badge */}
              <span
                className="inline-block mb-6 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider"
                style={{
                  backgroundColor: "rgba(255, 103, 0, 0.2)",
                  color: "#FF6700",
                }}
              >
                {currentSlide.tag}
              </span>

              {/* Title */}
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white"
                dangerouslySetInnerHTML={{ __html: currentSlide.title }}
              />

              {/* Subtitle */}
              <p
                className="mt-6 text-lg lg:text-xl leading-relaxed max-w-2xl"
                style={{ color: "#A5C2C9" }}
              >
                {currentSlide.subtitle}
              </p>

              {/* CTA Button */}
              <div className="mt-10">
                <a
                  href={currentSlide.cta.href}
                  className="inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 px-8 py-4 text-base text-white"
                  style={{ backgroundColor: "#00A25F" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = "#008A4F")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = "#00A25F")
                  }
                >
                  {currentSlide.cta.text}
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 flex h-1.5">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className="relative flex-1 cursor-pointer border-none p-0"
            style={{ backgroundColor: "#1A4D58" }}
            aria-label={`Go to slide ${index + 1}`}
          >
            {/* Fill bar */}
            <div
              className="absolute inset-0 origin-left"
              style={{
                backgroundColor: "#FF6700",
                transform:
                  index < currentIndex
                    ? "scaleX(1)"
                    : index === currentIndex
                      ? `scaleX(${progress})`
                      : "scaleX(0)",
                transformOrigin: "left",
                transition:
                  index === currentIndex ? "none" : "transform 0.3s ease",
              }}
            />
          </button>
        ))}
      </div>
    </section>
  );
}
