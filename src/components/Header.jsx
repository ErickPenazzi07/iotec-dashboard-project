import { FaWifi, FaMicrochip } from "react-icons/fa"

function Header({ institutionName, currentDate, iotStatus }) {
  const formatDate = (date) => {
    return date.toLocaleDateString("pt-BR", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const formatTime = (date) => {
    return date.toLocaleTimeString("pt-BR")
  }

  return (
    <header
      style={{
        background: "linear-gradient(135deg, #1f2937 0%, #111827 100%)",
        borderBottom: "2px solid #10b981",
        padding: "1.5rem 0",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.3)",
      }}
    >
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-md-4">
            <h1
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                background: "linear-gradient(135deg, #10b981, #3b82f6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                marginBottom: 0,
              }}
            >
              {institutionName}
            </h1>
          </div>

          <div className="col-md-4 text-center">
            <div style={{ color: "#9ca3af", fontSize: "0.9rem" }}>{formatDate(currentDate)}</div>
            <div
              style={{
                fontSize: "1.8rem",
                fontWeight: "bold",
                color: "#f9fafb",
                fontFamily: "monospace",
              }}
            >
              {formatTime(currentDate)}
            </div>
          </div>

          <div className="col-md-4 text-end">
            <div className={`status-badge ${iotStatus === "online" ? "status-online" : "status-offline"}`}>
              <FaMicrochip className="animate-pulse" />
              <span>ESP32 {iotStatus === "online" ? "Online" : "Offline"}</span>
              <FaWifi />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
