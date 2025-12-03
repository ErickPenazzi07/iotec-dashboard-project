"use client"

import { useState } from "react"
import { Card } from "react-bootstrap"
import { FaHome, FaDoorOpen, FaBed, FaCouch } from "react-icons/fa"

function SectorMap() {
  const [selectedSector, setSelectedSector] = useState(null)

  const sectors = [
    { id: 1, name: "Garagem", icon: FaHome, consumption: 25, level: "low", position: { top: "20%", left: "10%" } },
    {
      id: 2,
      name: "Sala de Estar",
      icon: FaCouch,
      consumption: 65,
      level: "moderate",
      position: { top: "20%", right: "10%" },
    },
    {
      id: 3,
      name: "Quarto 1",
      icon: FaBed,
      consumption: 45,
      level: "moderate",
      position: { bottom: "20%", left: "10%" },
    },
    {
      id: 4,
      name: "Quarto 2",
      icon: FaDoorOpen,
      consumption: 88,
      level: "high",
      position: { bottom: "20%", right: "10%" },
    },
  ]

  const getLevelColor = (level) => {
    switch (level) {
      case "low":
        return "#10b981"
      case "moderate":
        return "#f59e0b"
      case "high":
        return "#ef4444"
      default:
        return "#6b7280"
    }
  }

  const getLevelText = (level) => {
    switch (level) {
      case "low":
        return "Baixo"
      case "moderate":
        return "Moderado"
      case "high":
        return "Alto"
      default:
        return "Normal"
    }
  }

  return (
    <Card className="custom-card animate-slide-in p-4" style={{ minHeight: "500px" }}>
      <h4 style={{ color: "var(--text-light)", marginBottom: "1.5rem" }}>Consumo por Setores</h4>

      <div
        style={{
          position: "relative",
          height: "400px",
          background: "rgba(255, 255, 255, 0.03)",
          borderRadius: "12px",
          border: "2px dashed rgba(255, 255, 255, 0.1)",
        }}
      >
        {sectors.map((sector) => {
          const Icon = sector.icon
          return (
            <div
              key={sector.id}
              style={{
                position: "absolute",
                ...sector.position,
                transform: "translate(-50%, -50%)",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={() => setSelectedSector(sector)}
              onMouseLeave={() => setSelectedSector(null)}
            >
              <div
                style={{
                  background:
                    selectedSector?.id === sector.id ? getLevelColor(sector.level) : "rgba(255, 255, 255, 0.1)",
                  border: `3px solid ${getLevelColor(sector.level)}`,
                  borderRadius: "50%",
                  padding: "1.5rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 0.3s ease",
                  transform: selectedSector?.id === sector.id ? "scale(1.2)" : "scale(1)",
                  boxShadow: selectedSector?.id === sector.id ? `0 0 30px ${getLevelColor(sector.level)}` : "none",
                }}
              >
                <Icon size={32} color="white" />
              </div>

              <div
                style={{
                  marginTop: "0.5rem",
                  textAlign: "center",
                  background: "var(--bg-card)",
                  padding: "0.5rem 1rem",
                  borderRadius: "8px",
                  border: `1px solid ${getLevelColor(sector.level)}`,
                  minWidth: "120px",
                }}
              >
                <div
                  style={{
                    fontWeight: "bold",
                    color: "var(--text-light)",
                    fontSize: "0.875rem",
                  }}
                >
                  {sector.name}
                </div>
                <div
                  style={{
                    color: getLevelColor(sector.level),
                    fontSize: "1.25rem",
                    fontWeight: "bold",
                  }}
                >
                  {sector.consumption}W
                </div>
                <div
                  style={{
                    color: "var(--text-muted)",
                    fontSize: "0.75rem",
                  }}
                >
                  {getLevelText(sector.level)}
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <div className="mt-3 d-flex justify-content-center gap-4">
        <div className="d-flex align-items-center">
          <div
            style={{
              width: "16px",
              height: "16px",
              borderRadius: "50%",
              background: "#10b981",
              marginRight: "0.5rem",
            }}
          />
          <span style={{ color: "var(--text-muted)", fontSize: "0.875rem" }}>Baixo</span>
        </div>
        <div className="d-flex align-items-center">
          <div
            style={{
              width: "16px",
              height: "16px",
              borderRadius: "50%",
              background: "#f59e0b",
              marginRight: "0.5rem",
            }}
          />
          <span style={{ color: "var(--text-muted)", fontSize: "0.875rem" }}>Moderado</span>
        </div>
        <div className="d-flex align-items-center">
          <div
            style={{
              width: "16px",
              height: "16px",
              borderRadius: "50%",
              background: "#ef4444",
              marginRight: "0.5rem",
            }}
          />
          <span style={{ color: "var(--text-muted)", fontSize: "0.875rem" }}>Alto</span>
        </div>
      </div>
    </Card>
  )
}

export default SectorMap
