import "../styles/selectSkip.css";
import { useBooking } from "../contexts/bookingContext";
import SkipCarousel from "../components/carousel";

export default function SelectSkip() {
  const { skipData, selectedSkip, setSelectedSkip } = useBooking();

  return (
    <section className="skip-select-outer">
      <header className="skip-select-header">
        <h1>
          <span className="skip-gradient-text">Select Your Skip</span>
        </h1>
        <p className="skip-subtitle">
          Effortlessly scroll and pick the perfect skip for your project.
        </p>
      </header>
      <SkipCarousel
        skipData={skipData}
        selectedSkip={selectedSkip}
        setSelectedSkip={setSelectedSkip}
      />
    </section>
  );
}