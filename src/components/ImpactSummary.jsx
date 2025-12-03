"use client"
import { Card, Row, Col } from "react-bootstrap"
import { FaBolt, FaTint, FaRecycle, FaLeaf, FaTree } from "react-icons/fa"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts"

function ImpactSummary() {
  const weeklyData = [
    { week: "Sem 1", energia: 450, agua: 380, reciclagem: 45 },
    { week: "Sem 2", energia: 520, agua: 420, reciclagem: 52 },
    { week: "Sem 3", energia: 580, agua: 460, reciclagem: 58 },
    { week: "Sem 4", energia: 640, agua: 500, reciclagem: 68 },
  ]

  const impacts = [
    {
      icon: FaBolt,
      title: "Energia Economizada",
      value: "2.190",
      unit: "kWh",
      money: "R$ 1.423,50",
      color: "#f59e0b",
      bgColor: "rgba(245, 158, 11, 0.1)",
    },
    {
      icon: FaTint,
      title: "Água Poupada",
      value: "15.840",
      unit: "Litros",
      money: "",
      color: "#3b82f6",
      bgColor: "rgba(59, 130, 246, 0.1)",
    },
    {
      icon: FaRecycle,
      title: "Material Reciclado",
      value: "223",
      unit: "Kg",
      money: "",
      color: "#10b981",
      bgColor: "rgba(16, 185, 129, 0.1)",
    },
    {
      icon: FaLeaf,
      title: "CO₂ Evitado",
      value: "1.845",
      unit: "Kg",
      money: "",
      color: "#8b5cf6",
      bgColor: "rgba(139, 92, 246, 0.1)",
    },
    {
      icon: FaTree,
      title: "Equivalente",
      value: "84",
      unit: "Árvores",
      money: "Salvas",
      color: "#10b981",
      bgColor: "rgba(16, 185, 129, 0.1)",
    },
  ]

  return (
    <Card className="custom-card animate-slide-in p-4">
      <h4 style={{ color: "var(--text-light)", marginBottom: "1.5rem" }}>
        <FaLeaf style={{ marginRight: "0.5rem", color: "var(--primary-green)" }} />
        Impacto Ambiental Total
      </h4>

      <Row className="mb-4">
        {impacts.map((impact, index) => {
          const Icon = impact.icon
          return (
            <Col key={index} lg={2} md={4} sm={6} className="mb-3">
              <div
                style={{
                  background: impact.bgColor,
                  border: `2px solid ${impact.color}`,
                  borderRadius: "12px",
                  padding: "1.5rem 1rem",
                  textAlign: "center",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                }}
                className="impact-card"
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)"
                  e.currentTarget.style.boxShadow = `0 10px 25px ${impact.color}40`
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)"
                  e.currentTarget.style.boxShadow = "none"
                }}
              >
                <Icon size={32} color={impact.color} style={{ marginBottom: "0.75rem" }} />
                <div
                  style={{
                    fontSize: "0.75rem",
                    color: "var(--text-muted)",
                    marginBottom: "0.5rem",
                    fontWeight: "600",
                  }}
                >
                  {impact.title}
                </div>
                <div
                  style={{
                    fontSize: "1.75rem",
                    fontWeight: "bold",
                    color: impact.color,
                    marginBottom: "0.25rem",
                  }}
                >
                  {impact.value}
                </div>
                <div
                  style={{
                    fontSize: "0.875rem",
                    color: "var(--text-muted)",
                  }}
                >
                  {impact.unit}
                </div>
                {impact.money && (
                  <div
                    style={{
                      fontSize: "0.875rem",
                      color: impact.color,
                      fontWeight: "bold",
                      marginTop: "0.25rem",
                    }}
                  >
                    {impact.money}
                  </div>
                )}
              </div>
            </Col>
          )
        })}
      </Row>

      <div>
        <h5 style={{ color: "var(--text-light)", marginBottom: "1rem" }}>Evolução Mensal</h5>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={weeklyData}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis dataKey="week" stroke="var(--text-muted)" />
            <YAxis stroke="var(--text-muted)" />
            <Tooltip
              contentStyle={{
                background: "var(--bg-card)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "8px",
              }}
            />
            <Legend />
            <Bar dataKey="energia" fill="#f59e0b" name="Energia (kWh)" radius={[8, 8, 0, 0]} />
            <Bar dataKey="agua" fill="#3b82f6" name="Água (L)" radius={[8, 8, 0, 0]} />
            <Bar dataKey="reciclagem" fill="#10b981" name="Reciclagem (kg)" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  )
}

export default ImpactSummary
