import {
  FaMapMarkerAlt,
  FaTrash,
  FaTruck,
  FaClipboardCheck,
  FaCalendarAlt,
  FaCreditCard,
} from "react-icons/fa";
import "../styles/progressbar.css";
import { useNavigate } from "react-router-dom";
import { useBooking } from "../contexts/bookingContext";


export default function Progressbar() {
  const steps = [
  { label: "Postcode", icon: <FaMapMarkerAlt />, link: "/" },
  { label: "Waste Type", icon: <FaTrash />, link: "/" },
  { label: "Select Skip", icon: <FaTruck />, link: "/select-skip" },
  {
    label: "Permit Check",
    icon: <FaClipboardCheck />,
    link: "/end",
  },
  { label: "Choose Date", icon: <FaCalendarAlt />, link: "/end" },
  { label: "Payment", icon: <FaCreditCard />, link: "/end" },
];

  const { currentStep, goToStep, maxStep } = useBooking();
  const navigate = useNavigate();

  // currentStep: 0-based index of the active step
  return (
    <nav className="progressbar">
      {steps.map((step, idx) => (
        <div
          key={step.label}
          onClick={() => {
            if (idx <= maxStep) {
              navigate(step.link);
              goToStep(idx);
            }
          }}
          className={`progress-step
            ${idx < currentStep ? "completed" : ""}
            ${idx === currentStep ? "active" : ""}
            ${idx > maxStep ? "disabled" : ""}
          `}
        >
          <div className="progress-icon">{step.icon}</div>
          <span className="progress-label">{step.label}</span>
          {idx < steps.length - 1 && <div className="progress-line" />}
        </div>
      ))}
    </nav>
  );
}
