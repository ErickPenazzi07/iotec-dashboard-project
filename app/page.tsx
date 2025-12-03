"use client"

import { useState, useEffect } from "react"
import dynamic from "next/dynamic"

// Componentes carregados dinamicamente para evitar problemas de SSR com Bootstrap
const Header = dynamic(() => import("../src/components/Header"), { ssr: false })
const EnergyCard = dynamic(() => import("../src/components/EnergyCard"), { ssr: false })
const WaterCard = dynamic(() => import("../src/components/WaterCard"), { ssr: false })
const RecyclingCard = dynamic(() => import("../src/components/RecyclingCard"), { ssr: false })
const SectorMap = dynamic(() => import("../src/components/SectorMap"), { ssr: false })
const Gamification = dynamic(() => import("../src/components/Gamification"), { ssr: false })
const ImpactSummary = dynamic(() => import("../src/components/ImpactSummary"), { ssr: false })
const Footer = dynamic(() => import("../src/components/Footer"), { ssr: false })

export default function Page() {
  const [iotStatus, setIotStatus] = useState("online")
  const [currentDate, setCurrentDate] = useState(new Date())
  const [mounted, setMounted] = useState(false)

  // Garantir que está montado no cliente
  useEffect(() => {
    setMounted(true)
  }, [])

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

  if (!mounted) {
    return null
  }

  return (
    <div className="app">
      <Header institutionName="SENAI - Estação IoT Sustentável" currentDate={currentDate} iotStatus={iotStatus} />

      <div className="container-fluid py-4">
        {/* Cards Principais - Energia, Água e Reciclagem */}
        <div className="row mb-4">
          <div className="col-lg-4 col-md-6 mb-4">
            <EnergyCard />
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <WaterCard />
          </div>
          <div className="col-lg-4 col-md-12 mb-4">
            <RecyclingCard />
          </div>
        </div>

        {/* Mapa de Setores e Gamificação */}
        <div className="row mb-4">
          <div className="col-lg-8 mb-4">
            <SectorMap />
          </div>
          <div className="col-lg-4 mb-4">
            <Gamification />
          </div>
        </div>

        {/* Resumo de Impacto Ambiental */}
        <div className="row mb-4">
          <div className="col-lg-12">
            <ImpactSummary />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
