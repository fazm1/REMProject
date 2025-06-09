import { useState } from "react";
import skipData from "../data/skipData.json";
import "../styles/selectSkip.css";

const getSkipImage = (size) => `/images/skip-${size}.png`;

export default function SelectSkip() {
  const [selected, setSelected] = useState(skipData[0]?.id);

  // Keyboard navigation for accessibility
  const handleKeyDown = (e, id) => {
    if (e.key === "Enter" || e.key === " ") {
      setSelected(id);
    }
  };

  return (
    <div className="selectskip-container">
      <div className="selectskip-header">
        <h1>Choose Your Skip Size</h1>
        <p className="selectskip-subtitle">
          Select the skip size that best suits your needs
        </p>
      </div>
      <div className="skip-grid">
        {skipData.map((skip) => (
          <div
            key={skip.id}
            className={`skip-card${selected === skip.id ? " selected" : ""}`}
            tabIndex={0}
            aria-pressed={selected === skip.id}
            onClick={() => setSelected(skip.id)}
            onKeyDown={(e) => handleKeyDown(e, skip.id)}
          >
            <div className="skip-image-wrapper">
              <img
                src={getSkipImage(skip.size)}
                alt={`${skip.size} Yard Skip`}
                className="skip-image"
                loading="lazy"
              />
              <span className="skip-size-badge">{skip.size} Yards</span>
              {selected === skip.id && (
                <span className="skip-selected-check" aria-label="Selected">
                  ✓
                </span>
              )}
            </div>
            <div className="skip-info">
              <div className="skip-title">{skip.size} Yard Skip</div>
              <div className="skip-hire">
                {skip.hire_period_days} day hire period
              </div>
              <div className="skip-price">£{skip.price_before_vat}</div>
              <button
                className={`skip-select-btn${
                  selected === skip.id ? " selected" : ""
                }`}
                tabIndex={-1}
                aria-disabled={selected === skip.id}
              >
                {selected === skip.id ? "Selected" : "Select This Skip"}
                <span className="arrow">{selected === skip.id ? "" : "→"}</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
