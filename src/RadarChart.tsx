import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';

interface RadarData {
  axis: string;
  value: number;
  fullMark: number;
}

interface RadarChartProps {
  data: RadarData[];
  size?: number;
  className?: string;
}

export default function RadarChart({ data, size = 400, className = "" }: RadarChartProps) {
  const [hoveredPoint, setHoveredPoint] = useState<number | null>(null);

  // Configuration
  const padding = 60; // Space for labels
  const radius = (size - padding * 2) / 2;
  const center = size / 2;
  const totalAxes = data.length;
  const angleSlice = (Math.PI * 2) / totalAxes;

  // Helper to calculate points
  const getPoint = (index: number, value: number) => {
    const angle = index * angleSlice - Math.PI / 2; // Start at top
    const x = center + radius * value * Math.cos(angle);
    const y = center + radius * value * Math.sin(angle);
    return { x, y };
  };

  // Grid levels (0.2, 0.4, 0.6, 0.8, 1.0)
  const gridLevels = [0.2, 0.4, 0.6, 0.8, 1];

  // Generate the main polygon path string
  const pathString = useMemo(() => {
    return data.map((d, i) => {
      const { x, y } = getPoint(i, d.value);
      return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
    }).join(' ') + ' Z';
  }, [data, size]);

  return (
    <div className={`relative flex items-center justify-center ${className}`} style={{ width: size, height: size }}>
      <svg width={size} height={size} className="overflow-visible">
        {/* Glow Filter */}
        <defs>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Background Grid (Concentric Polygons) */}
        {gridLevels.map((level, levelIndex) => (
          <path
            key={levelIndex}
            d={data.map((_, i) => {
              const { x, y } = getPoint(i, level);
              return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
            }).join(' ') + ' Z'}
            fill="none"
            stroke="#1e293b" // slate-800
            strokeWidth="1"
            className="opacity-50"
          />
        ))}

        {/* Axis Lines */}
        {data.map((_, i) => {
          const { x, y } = getPoint(i, 1.05);
          return (
            <line
              key={i}
              x1={center}
              y1={center}
              x2={x}
              y2={y}
              stroke="#1e293b"
              strokeWidth="1"
              className="opacity-50"
            />
          );
        })}

        {/* Data Polygon */}
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          d={pathString}
          fill="rgba(59, 130, 246, 0.2)" // blue-500/20
          stroke="#3b82f6" // blue-500
          strokeWidth="3"
          filter="url(#glow)"
          className="drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]"
        />

        {/* Data Points & Tooltips */}
        {data.map((d, i) => {
          const { x, y } = getPoint(i, d.value);
          const labelPoint = getPoint(i, 1.2); // Label position slightly further out

          return (
            <g key={i} onMouseEnter={() => setHoveredPoint(i)} onMouseLeave={() => setHoveredPoint(null)}>
              {/* Interactive Dot */}
              <motion.circle
                cx={x}
                cy={y}
                r={4}
                fill="#3b82f6"
                stroke="#0f172a"
                strokeWidth={2}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 1 + i * 0.1 }}
                whileHover={{ scale: 1.5 }}
                className="cursor-pointer z-10"
              />

              {/* Axis Label */}
              <text
                x={labelPoint.x}
                y={labelPoint.y}
                textAnchor="middle"
                dominantBaseline="middle"
                className="fill-slate-400 text-xs md:text-sm font-bold uppercase tracking-wider"
                style={{ 
                  fill: hoveredPoint === i ? '#3b82f6' : '#94a3b8',
                  transition: 'fill 0.3s ease'
                }}
              >
                {d.axis}
              </text>

              {/* Tooltip / Value Label on Hover */}
              {hoveredPoint === i && (
                <motion.g
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <rect
                    x={x - 20}
                    y={y - 30}
                    width="40"
                    height="20"
                    rx="4"
                    fill="#0f172a" // slate-950
                    stroke="#3b82f6"
                    strokeWidth="1"
                  />
                  <text
                    x={x}
                    y={y - 20}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className="fill-white text-xs font-bold font-mono"
                  >
                    {Math.round(d.value * 100)}
                  </text>
                </motion.g>
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
}
