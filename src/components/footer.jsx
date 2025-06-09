import { useNavigate } from "react-router-dom";
import { useBooking } from "../contexts/bookingContext";
import "../styles/footer.css";
export default function Footer() {
  const { selectedSkipObj, unlockNextStep, goToStep, currentStep } = useBooking();
  const navigate = useNavigate();
  return (
    <>
      <div className="skip-footer">
        <div>
          {(() => {
            const s = selectedSkipObj;
            return s ? (
              <>
                <span className="skip-footer-title">{s.size} Yard Skip</span>
                <span className="skip-footer-price">£{s.price_before_vat}</span>
                <span className="skip-footer-hire">
                  {s.hire_period_days} day hire
                </span>
              </>
            ) : null;
          })()}
        </div>
        <div>
          <button
            className="skip-footer-btn back"
            onClick={() => {
              goToStep(currentStep - 1);
              navigate("/start");
            }}
          >
            Back
          </button>
          <button
            className="skip-footer-btn continue"
            onClick={() => {
              unlockNextStep();
              navigate("/end");
            }}
          >
            Continue
          </button>
        </div>
      </div>
    </>
  );
}
