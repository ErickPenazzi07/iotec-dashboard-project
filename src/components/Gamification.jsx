"use client"

import { useState } from "react"
import { Card, Button, Modal } from "react-bootstrap"
import { FaTrophy, FaMedal, FaStar, FaAward } from "react-icons/fa"

function Gamification() {
  const [showQuiz, setShowQuiz] = useState(false)

  const rankings = [
    { position: 1, name: "Turma A - Manhã", points: 2850, savings: "23%" },
    { position: 2, name: "Turma B - Tarde", points: 2640, savings: "19%" },
    { position: 3, name: "Turma C - Noite", points: 2420, savings: "16%" },
    { position: 4, name: "Turma D - Integral", points: 2180, savings: "12%" },
    { position: 5, name: "Turma E - Manhã", points: 1950, savings: "8%" },
  ]

  const achievements = [
    { id: 1, name: "Guardião da Energia", icon: FaBolt, unlocked: true, color: "#f59e0b" },
    { id: 2, name: "Herói da Água", icon: FaTint, unlocked: true, color: "#3b82f6" },
    { id: 3, name: "Mestre da Reciclagem", icon: FaRecycle, unlocked: false, color: "#10b981" },
    { id: 4, name: "Eco Campeão", icon: FaAward, unlocked: false, color: "#8b5cf6" },
  ]

  const getMedalIcon = (position) => {
    if (position === 1) return { icon: "🥇", color: "#fbbf24" }
    if (position === 2) return { icon: "🥈", color: "#d1d5db" }
    if (position === 3) return { icon: "🥉", color: "#cd7f32" }
    return { icon: position, color: "var(--text-muted)" }
  }

  function FaBolt({ size, color }) {
    return <span style={{ fontSize: size, color }}>⚡</span>
  }

  function FaTint({ size, color }) {
    return <span style={{ fontSize: size, color }}>💧</span>
  }

  function FaRecycle({ size, color }) {
    return <span style={{ fontSize: size, color }}>♻️</span>
  }

  return (
    <Card className="custom-card animate-slide-in p-4" style={{ minHeight: "500px" }}>
      <div className="d-flex align-items-center justify-content-between mb-3">
        <h4 style={{ color: "var(--text-light)", marginBottom: 0 }}>
          <FaTrophy color="#fbbf24" style={{ marginRight: "0.5rem" }} />
          Ranking Semanal
        </h4>
        <div
          style={{
            background: "linear-gradient(135deg, #10b981, #059669)",
            padding: "0.5rem 1rem",
            borderRadius: "50px",
            fontWeight: "bold",
            fontSize: "0.875rem",
          }}
        >
          <FaStar style={{ marginRight: "0.25rem" }} />
          1.240 pts
        </div>
      </div>

      <div style={{ marginBottom: "1.5rem" }}>
        {rankings.map((rank) => {
          const medal = getMedalIcon(rank.position)
          return (
            <div key={rank.position} className="ranking-item">
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                  <span className="medal" style={{ color: medal.color, fontSize: "1.5rem" }}>
                    {medal.icon}
                  </span>
                  <div>
                    <div
                      style={{
                        fontWeight: "bold",
                        color: "var(--text-light)",
                        fontSize: "0.9rem",
                      }}
                    >
                      {rank.name}
                    </div>
                    <div
                      style={{
                        color: "var(--primary-green)",
                        fontSize: "0.75rem",
                        fontWeight: "600",
                      }}
                    >
                      ↓ {rank.savings} economia
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    fontWeight: "bold",
                    color: "#fbbf24",
                    fontSize: "1.1rem",
                  }}
                >
                  {rank.points}
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <div style={{ marginBottom: "1.5rem" }}>
        <h5 style={{ color: "var(--text-light)", marginBottom: "1rem", fontSize: "1rem" }}>
          <FaMedal style={{ marginRight: "0.5rem", color: "#fbbf24" }} />
          Conquistas
        </h5>
        <div className="row">
          {achievements.map((achievement) => {
            const Icon = achievement.icon
            return (
              <div key={achievement.id} className="col-6 mb-2">
                <div
                  style={{
                    background: achievement.unlocked ? "rgba(255, 255, 255, 0.08)" : "rgba(255, 255, 255, 0.02)",
                    border: `2px solid ${achievement.unlocked ? achievement.color : "rgba(255,255,255,0.1)"}`,
                    borderRadius: "12px",
                    padding: "1rem",
                    textAlign: "center",
                    opacity: achievement.unlocked ? 1 : 0.5,
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                  }}
                  className="achievement-badge"
                >
                  <Icon size={32} color={achievement.color} />
                  <div
                    style={{
                      color: "var(--text-light)",
                      fontSize: "0.7rem",
                      marginTop: "0.5rem",
                      fontWeight: "600",
                    }}
                  >
                    {achievement.name}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <Button className="btn-eco w-100" onClick={() => setShowQuiz(true)}>
        <FaStar style={{ marginRight: "0.5rem" }} />
        Quiz Sustentável
      </Button>

      <Modal show={showQuiz} onHide={() => setShowQuiz(false)} centered>
        <Modal.Header
          closeButton
          style={{
            background: "var(--bg-card)",
            border: "none",
            color: "var(--text-light)",
          }}
        >
          <Modal.Title>Quiz de Sustentabilidade</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ background: "var(--bg-dark)", color: "var(--text-light)" }}>
          <h5 style={{ marginBottom: "1rem" }}>Quanto de CO₂ uma árvore absorve por ano em média?</h5>
          <div className="d-grid gap-2">
            <Button variant="outline-success">A) 5 kg</Button>
            <Button variant="outline-success">B) 22 kg ✓</Button>
            <Button variant="outline-success">C) 50 kg</Button>
            <Button variant="outline-success">D) 100 kg</Button>
          </div>
          <div
            style={{
              marginTop: "1rem",
              padding: "1rem",
              background: "rgba(16, 185, 129, 0.1)",
              borderRadius: "8px",
              border: "1px solid var(--primary-green)",
            }}
          >
            <strong style={{ color: "var(--primary-green)" }}>+50 pontos</strong> ao responder!
          </div>
        </Modal.Body>
      </Modal>
    </Card>
  )
}

export default Gamification
