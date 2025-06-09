import { FaMapMarkerAlt, FaTrash, FaTruck, FaClipboardCheck, FaCalendarAlt, FaCreditCard } from "react-icons/fa";
import '../styles/progressbar.css';

const steps = [
  { label: "Postcode", icon: <FaMapMarkerAlt /> },
  { label: "Waste Type", icon: <FaTrash /> },
  { label: "Select Skip", icon: <FaTruck /> },
  { label: "Permit Check", icon: <FaClipboardCheck /> },
  { label: "Choose Date", icon: <FaCalendarAlt /> },
  { label: "Payment", icon: <FaCreditCard /> },
];

export default function Progressbar({ currentStep = 2 }) {
  // currentStep: 0-based index of the active step
  return (
    <nav className="progressbar">
      {steps.map((step, idx) => (
        <div
          key={step.label}
          className={`progress-step
            ${idx < currentStep ? "completed" : ""}
            ${idx === currentStep ? "active" : ""}
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