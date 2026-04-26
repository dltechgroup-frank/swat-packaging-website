import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface Props {
  targetDate: string;
  labels: {
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
  };
  eventLiveText?: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function calculateTimeLeft(targetDate: string): TimeLeft | null {
  const difference = new Date(targetDate).getTime() - new Date().getTime();

  if (difference <= 0) {
    return null;
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

export default function CountdownTimer({
  targetDate,
  labels,
  eventLiveText = "Event in progress",
}: Props) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(() =>
    calculateTimeLeft(targetDate)
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (!timeLeft) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg"
        style={{ backgroundColor: "rgba(0, 162, 95, 0.2)" }}
      >
        <span
          className="w-3 h-3 rounded-full animate-pulse"
          style={{ backgroundColor: "#00A25F" }}
        />
        <span className="text-white font-semibold">{eventLiveText}</span>
      </motion.div>
    );
  }

  const timeBlocks = [
    { value: timeLeft.days, label: labels.days },
    { value: timeLeft.hours, label: labels.hours },
    { value: timeLeft.minutes, label: labels.minutes },
    { value: timeLeft.seconds, label: labels.seconds },
  ];

  return (
    <div className="flex items-center gap-3 sm:gap-4">
      {timeBlocks.map((block, index) => (
        <motion.div
          key={block.label}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="flex flex-col items-center"
        >
          <div
            className="relative w-16 sm:w-20 h-16 sm:h-20 rounded-xl flex items-center justify-center"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              border: "2px solid rgba(255, 103, 0, 0.5)",
            }}
          >
            <span className="text-2xl sm:text-3xl font-bold text-white tabular-nums">
              {String(block.value).padStart(2, "0")}
            </span>
          </div>
          <span
            className="mt-2 text-xs font-medium uppercase tracking-wider"
            style={{ color: "#A5C2C9" }}
          >
            {block.label}
          </span>
        </motion.div>
      ))}
    </div>
  );
}
