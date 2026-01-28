import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface ChartData {
  label: string;
  before: number;
  after: number;
  unit: string;
}

interface Props {
  title: string;
  subtitle: string;
  data: ChartData[];
}

export default function WasteReductionChart({ title, subtitle, data }: Props) {
  const chartRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(chartRef, { once: true, margin: "-100px" });

  // Find the maximum value across all data to normalize bar widths
  const maxValue = Math.max(...data.flatMap((d) => [d.before, d.after]));

  return (
    <div ref={chartRef}>
      {/* Header row */}
      <div className="flex items-start justify-between mb-8">
        <div>
          <h3
            className="text-2xl font-bold"
            style={{ color: "#00313C" }}
          >
            {title}
          </h3>
          <p
            className="mt-2 text-base"
            style={{ color: "#4A5568" }}
          >
            {subtitle}
          </p>
        </div>

        {/* Legend */}
        <div className="flex items-center gap-6 shrink-0 ml-4 pt-1">
          <div className="flex items-center gap-2">
            <span
              className="inline-block w-3 h-3 rounded-full"
              style={{ backgroundColor: "#A5C2C9" }}
            />
            <span
              className="text-sm font-medium"
              style={{ color: "#4A5568" }}
            >
              Before
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span
              className="inline-block w-3 h-3 rounded-full"
              style={{ backgroundColor: "#00A25F" }}
            />
            <span
              className="text-sm font-medium"
              style={{ color: "#4A5568" }}
            >
              After
            </span>
          </div>
        </div>
      </div>

      {/* Chart rows */}
      <div className="space-y-6">
        {data.map((item, index) => {
          const beforePct = (item.before / maxValue) * 100;
          const afterPct = (item.after / maxValue) * 100;
          const staggerDelay = index * 0.15;

          return (
            <div key={item.label} className="space-y-2">
              {/* Row label */}
              <span
                className="block text-sm font-medium"
                style={{ color: "#4A5568" }}
              >
                {item.label}
              </span>

              {/* Before bar */}
              <div className="flex items-center gap-3">
                <div className="flex-1 h-8 rounded bg-gray-100 overflow-hidden">
                  <motion.div
                    className="h-full rounded"
                    style={{ backgroundColor: "#A5C2C9" }}
                    initial={{ width: 0 }}
                    animate={
                      isInView
                        ? { width: `${beforePct}%` }
                        : { width: 0 }
                    }
                    transition={{
                      duration: 0.8,
                      ease: "easeOut",
                      delay: staggerDelay,
                    }}
                  />
                </div>
                <span
                  className="text-sm font-semibold w-20 text-right tabular-nums"
                  style={{ color: "#00313C" }}
                >
                  {item.before}
                  {item.unit}
                </span>
              </div>

              {/* After bar */}
              <div className="flex items-center gap-3">
                <div className="flex-1 h-8 rounded bg-gray-100 overflow-hidden">
                  <motion.div
                    className="h-full rounded"
                    style={{ backgroundColor: "#00A25F" }}
                    initial={{ width: 0 }}
                    animate={
                      isInView
                        ? { width: `${afterPct}%` }
                        : { width: 0 }
                    }
                    transition={{
                      duration: 0.8,
                      ease: "easeOut",
                      delay: staggerDelay + 0.1,
                    }}
                  />
                </div>
                <span
                  className="text-sm font-semibold w-20 text-right tabular-nums"
                  style={{ color: "#00313C" }}
                >
                  {item.after}
                  {item.unit}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
