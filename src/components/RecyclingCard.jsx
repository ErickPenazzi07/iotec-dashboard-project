import { FaRecycle } from "react-icons/fa"
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts"

function RecyclingCard() {
  const pieData = [
    { name: "Papel", value: 35, color: "#10b981" },
    { name: "Plástico", value: 28, color: "#3b82f6" },
    { name: "Metal", value: 22, color: "#f59e0b" },
    { name: "Vidro", value: 15, color: "#8b5cf6" },
  ]

  const monthlyGoal = 100 // kg
  const currentRecycled = 68 // kg

  return (
    <div className="custom-card animate-slide-in p-4">
      <div className="d-flex align-items-center mb-3">
        <div
          style={{
            background: "linear-gradient(135deg, #10b981, #059669)",
            borderRadius: "12px",
            padding: "1rem",
            marginRight: "1rem",
          }}
        >
          <FaRecycle size={32} color="white" />
        </div>
        <div>
          <h3 style={{ marginBottom: "0.25rem", color: "#f9fafb" }}>Reciclagem</h3>
          <p style={{ marginBottom: 0, color: "#9ca3af", fontSize: "0.875rem" }}>Materiais reciclados</p>
        </div>
      </div>

      <div style={{ marginTop: "1.5rem" }}>
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                background: "#1f2937",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "8px",
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-4">
        <h6 style={{ color: "#f9fafb", marginBottom: "1rem" }}>Progresso Meta Mensal</h6>
        <div className="d-flex justify-content-between mb-2">
          <span style={{ color: "#9ca3af", fontSize: "0.875rem" }}>Meta: {monthlyGoal}kg</span>
          <span style={{ color: "#f9fafb", fontWeight: "bold" }}>
            {currentRecycled}kg ({Math.round((currentRecycled / monthlyGoal) * 100)}%)
          </span>
        </div>
        <div
          className="progress"
          style={{ height: "12px", borderRadius: "6px", backgroundColor: "rgba(255,255,255,0.1)" }}
        >
          <div
            className="progress-bar bg-success"
            role="progressbar"
            style={{ width: `${(currentRecycled / monthlyGoal) * 100}%` }}
            aria-valuenow={(currentRecycled / monthlyGoal) * 100}
            aria-valuemin={0}
            aria-valuemax={100}
          />
        </div>
      </div>

      <div className="mt-3">
        <div className="row text-center">
          {pieData.map((material, index) => (
            <div key={index} className="col-6 mb-2">
              <div
                style={{
                  background: "rgba(255, 255, 255, 0.05)",
                  borderRadius: "8px",
                  padding: "0.75rem",
                  border: `1px solid ${material.color}`,
                }}
              >
                <div style={{ color: material.color, fontWeight: "bold", fontSize: "1.25rem" }}>{material.value}kg</div>
                <div style={{ color: "#9ca3af", fontSize: "0.75rem" }}>{material.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default RecyclingCard
