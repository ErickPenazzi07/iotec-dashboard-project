function GaugeChart({ value, max, unit, color }) {
  const percentage = (value / max) * 100
  const rotation = (percentage / 100) * 180 - 90

  return (
    <div className="gauge-container" style={{ marginBottom: "1rem" }}>
      <svg width="200" height="120" viewBox="0 0 200 120">
        {/* Background arc */}
        <path
          d="M 20 100 A 80 80 0 0 1 180 100"
          fill="none"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="20"
          strokeLinecap="round"
        />
        {/* Foreground arc */}
        <path
          d="M 20 100 A 80 80 0 0 1 180 100"
          fill="none"
          stroke={color}
          strokeWidth="20"
          strokeLinecap="round"
          strokeDasharray={`${percentage * 2.51}, 1000`}
          style={{ transition: "stroke-dasharray 1s ease" }}
        />
        {/* Needle */}
        <g transform={`rotate(${rotation}, 100, 100)`}>
          <line x1="100" y1="100" x2="100" y2="40" stroke="white" strokeWidth="3" strokeLinecap="round" />
          <circle cx="100" cy="100" r="6" fill="white" />
        </g>
      </svg>
      <div className="text-center" style={{ marginTop: "-20px" }}>
        <div
          style={{
            fontSize: "2rem",
            fontWeight: "bold",
            color: color,
          }}
        >
          {value}
          {unit}
        </div>
        <div style={{ color: "var(--text-muted)", fontSize: "0.875rem" }}>
          de {max}
          {unit}
        </div>
      </div>
    </div>
  )
}

export default GaugeChart
