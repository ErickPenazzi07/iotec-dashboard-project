import { Container } from "react-bootstrap"
import { FaLeaf } from "react-icons/fa"

function Footer() {
  return (
    <footer
      style={{
        background: "linear-gradient(135deg, #111827 0%, #1f2937 100%)",
        borderTop: "2px solid var(--primary-green)",
        padding: "2rem 0",
        marginTop: "3rem",
      }}
    >
      <Container fluid>
        <div className="text-center">
          <div
            style={{
              fontSize: "1.25rem",
              marginBottom: "1rem",
              color: "var(--text-light)",
              fontWeight: "600",
            }}
          >
            <FaLeaf style={{ marginRight: "0.5rem", color: "var(--primary-green)" }} />
            "Pequenas atitudes geram grandes transformações"
          </div>

          <div className="d-flex justify-content-center align-items-center gap-4 mb-3">
            <img src="/senai-logo.jpg" alt="SENAI" style={{ height: "40px", filter: "brightness(0.9)" }} />
            <img src="/sicredi-logo.png" alt="Sicredi" style={{ height: "40px", filter: "brightness(0.9)" }} />
          </div>

          <div
            style={{
              color: "var(--text-muted)",
              fontSize: "0.875rem",
            }}
          >
            Estação IoT Sustentável © 2025 - Todos os direitos reservados
          </div>
          <div
            style={{
              color: "var(--text-muted)",
              fontSize: "0.75rem",
              marginTop: "0.5rem",
            }}
          >
            Desenvolvido com 💚 para um futuro mais sustentável
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
