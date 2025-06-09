import "../styles/selectSkip.css";
import { useBooking } from "../contexts/bookingContext";

export default function Start() {

  return (
    <section className="skip-select-outer">
      <header className="skip-select-header">
        <h1>
          <span className="skip-gradient-text">Welcome</span>
        </h1>
        <p className="skip-subtitle">
            Please navigate to Select Skip.
        </p>
      </header>
    </section>
  );
}