import { FaTint, FaExclamationTriangle } from "react-icons/fa"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

function WaterCard() {
  const data = [
    { time: "00h", fluxo: 5 },
    { time: "04h", fluxo: 2 },
    { time: "08h", fluxo: 15 },
    { time: "12h", fluxo: 25 },
    { time: "16h", fluxo: 20 },
    { time: "20h", fluxo: 18 },
    { time: "24h", fluxo: 8 },
  ]

  const currentFlow = 12.5 // L/min
  const dailyGoal = 500 // L/dia
  const currentConsumption = 387 // L
  const hasLeak = false

  return (
    <div className="custom-card animate-slide-in p-4">
      <div className="d-flex align-items-center justify-content-between mb-3">
        <div className="d-flex align-items-center">
          <div
            style={{
              background: "linear-gradient(135deg, #3b82f6, #2563eb)",
              borderRadius: "12px",
              padding: "1rem",
              marginRight: "1rem",
            }}
          >
            <FaTint size={32} color="white" />
          </div>
          <div>
            <h3 style={{ marginBottom: "0.25rem", color: "#f9fafb" }}>Água</h3>
            <p style={{ marginBottom: 0, color: "#9ca3af", fontSize: "0.875rem" }}>Fluxo de consumo</p>
          </div>
        </div>
        {hasLeak && (
          <div
            style={{
              background: "rgba(239, 68, 68, 0.2)",
              padding: "0.5rem",
              borderRadius: "8px",
              border: "1px solid #ef4444",
            }}
          >
            <FaExclamationTriangle color="#ef4444" size={20} />
          </div>
        )}
      </div>

      <div className="text-center mb-3">
        <div
          style={{
            fontSize: "3rem",
            fontWeight: "bold",
            color: "#3b82f6",
            fontFamily: "monospace",
          }}
        >
          {currentFlow}
        </div>
        <div style={{ color: "#9ca3af", fontSize: "0.875rem" }}>Litros por minuto</div>
      </div>

      <div className="mb-3">
        <div className="d-flex justify-content-between mb-2">
          <span style={{ color: "#9ca3af", fontSize: "0.875rem" }}>Meta diária: {dailyGoal}L</span>
          <span style={{ color: "#f9fafb", fontWeight: "bold" }}>
            {currentConsumption}L ({Math.round((currentConsumption / dailyGoal) * 100)}%)
          </span>
        </div>
        <div
          className="progress"
          style={{ height: "12px", borderRadius: "6px", backgroundColor: "rgba(255,255,255,0.1)" }}
        >
          <div
            className="progress-bar bg-info"
            role="progressbar"
            style={{ width: `${(currentConsumption / dailyGoal) * 100}%` }}
            aria-valuenow={(currentConsumption / dailyGoal) * 100}
            aria-valuemin={0}
            aria-valuemax={100}
          />
        </div>
      </div>

      <div style={{ marginTop: "1.5rem" }}>
        <h6 style={{ color: "#f9fafb", marginBottom: "1rem" }}>Fluxo ao Longo do Dia</h6>
        <ResponsiveContainer width="100%" height={180}>
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorFlow" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis dataKey="time" stroke="#9ca3af" />
            <YAxis stroke="#9ca3af" />
            <Tooltip
              contentStyle={{
                background: "#1f2937",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "8px",
              }}
            />
            <Area
              type="monotone"
              dataKey="fluxo"
              stroke="#3b82f6"
              fillOpacity={1}
              fill="url(#colorFlow)"
              name="Fluxo (L/min)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default WaterCard
