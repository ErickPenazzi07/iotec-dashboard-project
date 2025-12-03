import { FaBolt } from "react-icons/fa"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import GaugeChart from "./GaugeChart"

function EnergyCard() {
  const data = [
    { time: "00h", consumo: 120, media: 150 },
    { time: "04h", consumo: 80, media: 140 },
    { time: "08h", consumo: 200, media: 180 },
    { time: "12h", consumo: 280, media: 220 },
    { time: "16h", consumo: 320, media: 240 },
    { time: "20h", consumo: 240, media: 200 },
    { time: "24h", consumo: 180, media: 160 },
  ]

  const currentConsumption = 285 // watts
  const maxConsumption = 500
  const estimatedCost = ((currentConsumption * 24 * 0.65) / 1000).toFixed(2) // R$ por dia

  return (
    <div className="custom-card animate-slide-in p-4">
      <div className="d-flex align-items-center mb-3">
        <div
          style={{
            background: "linear-gradient(135deg, #f59e0b, #d97706)",
            borderRadius: "12px",
            padding: "1rem",
            marginRight: "1rem",
          }}
        >
          <FaBolt size={32} color="white" />
        </div>
        <div>
          <h3 style={{ marginBottom: "0.25rem", color: "#f9fafb" }}>Energia</h3>
          <p style={{ marginBottom: 0, color: "#9ca3af", fontSize: "0.875rem" }}>Consumo em tempo real</p>
        </div>
      </div>

      <GaugeChart value={currentConsumption} max={maxConsumption} unit="W" color="#f59e0b" />

      <div className="mt-3 mb-3">
        <div className="d-flex justify-content-between mb-2">
          <span style={{ color: "#9ca3af" }}>Custo estimado (dia)</span>
          <span
            style={{
              fontWeight: "bold",
              fontSize: "1.25rem",
              color: "#f59e0b",
            }}
          >
            R$ {estimatedCost}
          </span>
        </div>
      </div>

      <div style={{ marginTop: "1.5rem" }}>
        <h6 style={{ color: "#f9fafb", marginBottom: "1rem" }}>Hoje vs Média Semanal</h6>
        <ResponsiveContainer width="100%" height={180}>
          <LineChart data={data}>
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
            <Line type="monotone" dataKey="consumo" stroke="#f59e0b" strokeWidth={3} name="Hoje" />
            <Line type="monotone" dataKey="media" stroke="#6b7280" strokeWidth={2} strokeDasharray="5 5" name="Média" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default EnergyCard
