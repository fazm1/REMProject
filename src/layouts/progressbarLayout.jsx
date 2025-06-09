import Footer from "../components/footer";
import Progressbar from "../components/progressBar";
  
export default function ProgressbarLayout({ children }) {
  return (
    <>
      <Progressbar />
      <main className="mt-4">{children}</main>
      <Footer />
    </>
  );
}
