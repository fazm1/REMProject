import { useState } from "react";
import Footer from "../components/footer";
import Progressbar from "../components/progressBar";

export default function ProgressbarLayout({ children, currentStep }) {
  const [selectedSkip, setSelectedSkip] = useState(null);

  return (
    <>
      <Progressbar />
      <main className="mt-4">{children}</main>
      <Footer />
    </>
  );
}
