import { useBooking } from '../contexts/bookingContext';
import '../styles/footer.css'
export default function Footer() {
      const { selectedSkipObj } = useBooking();

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
          <button className="skip-footer-btn back">Back</button>
          <button className="skip-footer-btn continue">Continue →</button>
        </div>
      </div>
    </>
  );
}
