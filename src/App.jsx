"use client"

import { useState, useEffect } from "react"
import { Container, Row, Col } from "react-bootstrap"
import Header from "./components/Header"
import EnergyCard from "./components/EnergyCard"
import WaterCard from "./components/WaterCard"
import RecyclingCard from "./components/RecyclingCard"
import SectorMap from "./components/SectorMap"
import Gamification from "./components/Gamification"
import ImpactSummary from "./components/ImpactSummary"
import Footer from "./components/Footer"

function App() {
  const [iotStatus, setIotStatus] = useState("online")
  const [currentDate, setCurrentDate] = useState(new Date())

  // Simular atualização de data/hora
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  // Simular mudança de status IoT
  useEffect(() => {
    const statusTimer = setInterval(() => {
      setIotStatus((prev) => (prev === "online" ? "online" : "online"))
    }, 30000)

    return () => clearInterval(statusTimer)
  }, [])

  return (
    <div className="app">
      <Header institutionName="SENAI - Estação IoT Sustentável" currentDate={currentDate} iotStatus={iotStatus} />

      <Container fluid className="py-4">
        {/* Cards Principais - Energia, Água e Reciclagem */}
        <Row className="mb-4">
          <Col lg={4} md={6} className="mb-4">
            <EnergyCard />
          </Col>
          <Col lg={4} md={6} className="mb-4">
            <WaterCard />
          </Col>
          <Col lg={4} md={12} className="mb-4">
            <RecyclingCard />
          </Col>
        </Row>

        {/* Mapa de Setores e Gamificação */}
        <Row className="mb-4">
          <Col lg={8} className="mb-4">
            <SectorMap />
          </Col>
          <Col lg={4} className="mb-4">
            <Gamification />
          </Col>
        </Row>

        {/* Resumo de Impacto Ambiental */}
        <Row className="mb-4">
          <Col lg={12}>
            <ImpactSummary />
          </Col>
        </Row>
      </Container>

      <Footer />
    </div>
  )
}

export default App
