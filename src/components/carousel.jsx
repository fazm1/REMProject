import { useRef, useState, useEffect } from "react";
import "../styles/carousel.css";

const getSkipImage = (size) => `/images/skips/${size}-yarder-skip.jpg`;

export default function SkipCarousel({  
  skipData,
  selectedSkip,
  setSelectedSkip,
}) {
  const carouselRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [visibleIndex, setVisibleIndex] = useState(0);

  // Carousel scroll by button
  const scrollBy = (offset) => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  // Keyboard navigation for accessibility
  const handleKeyDown = (e, id) => {
    if (e.key === "Enter" || e.key === " ") {
      setSelectedSkip(id);
    }
  };

  // --- Carousel indicator logic ---
  useEffect(() => {
    const handleScroll = () => {
      if (!carouselRef.current) return;
      const { scrollLeft, scrollWidth, offsetWidth } = carouselRef.current;
      const maxScroll = scrollWidth - offsetWidth;
      // Prevent division by zero
      if (maxScroll <= 0) {
        setVisibleIndex(0);
        return;
      }
      // Calculate scroll progress (0 to 1)
      const progress = scrollLeft / maxScroll;
      // Map progress to index
      const idx = Math.round(progress * (skipData.length - 1));
      setVisibleIndex(idx);
    };
    const ref = carouselRef.current;
    if (ref) ref.addEventListener("scroll", handleScroll);
    // Also run once on mount
    handleScroll();
    return () => ref && ref.removeEventListener("scroll", handleScroll);
  }, [skipData.length]);

  return (
    <div className="carousel-fixed-wrapper">
      {/* Indicator on top */}
      <div className="carousel-indicator">
        {skipData.map((_, idx) => (
          <span key={idx} className={idx === visibleIndex ? "active" : ""} />
        ))}
      </div>
      <button
        className="carousel-btn left fixed"
        aria-label="Scroll left"
        onClick={() => scrollBy(-360)}
        type="button"
      >
        <svg width="28" height="28" viewBox="0 0 28 28">
          <circle cx="14" cy="14" r="13" fill="#23242a" opacity="0.92" />
          <polyline
            points="17,8 11,14 17,20"
            fill="none"
            stroke="var(--primary)"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      </button>
      <div
        className={`skip-carousel${isDragging ? " dragging" : ""}`}
        ref={carouselRef}
        tabIndex={0}
        style={{ width: "100vw", maxWidth: "100vw", position: "relative" }}
      >
        {skipData.map((skip) => (
          <div
            key={skip.id}
            className={`skip-glass-card${
              selectedSkip === skip.id ? " selected" : ""
            }`}
            tabIndex={0}
            aria-pressed={selectedSkip === skip.id}
            onClick={() => setSelectedSkip(skip.id)}
            onKeyDown={(e) => handleKeyDown(e, skip.id)}
          >
            <div className="skip-glass-img-wrap">
              <img
                src={getSkipImage(skip.size)}
                alt={`${skip.size} Yard Skip`}
           
                className="skip-glass-img"
                loading="lazy"
              />
              <span className="skip-glass-badge">
                {skip.size} yd<sup>3</sup>
              </span>
              {selectedSkip === skip.id && (
                <span className="skip-glass-check" aria-label="Selected">
                  <svg width="38" height="38" viewBox="0 0 38 38">
                    <circle
                      cx="19"
                      cy="19"
                      r="17"
                      fill="var(--primary)"
                      opacity="0.8"
                    />
                    <polyline
                      points="12,20 18,26 27,13"
                      fill="none"
                      stroke="#fff"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              )}
            </div>
            <div className="skip-glass-info">
              <div className="skip-glass-title">{skip.size} Yard Skip</div>
              <div className="skip-glass-period">
                <span className="skip-glass-dot" /> {skip.hire_period_days} days
                hire
              </div>
              <div className="skip-glass-price">£{skip.price_before_vat}</div>
              <button
                className={`skip-glass-btn${
                  selectedSkip === skip.id ? " selected" : ""
                }`}
                tabIndex={-1}
                aria-disabled={selectedSkip === skip.id}
                type="button"
              >
                {selectedSkip === skip.id ? "✓ Selected" : "Choose"}
              </button>
            </div>
          </div>
        ))}
      </div>
      <button
        className="carousel-btn right fixed"
        aria-label="Scroll right"
        onClick={() => scrollBy(360)}
        type="button"
      >
        <svg width="28" height="28" viewBox="0 0 28 28">
          <circle cx="14" cy="14" r="13" fill="#23242a" opacity="0.92" />
          <polyline
            points="11,8 17,14 11,20"
            fill="none"
            stroke="var(--primary)"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      </button>
    </div>
  );
}
