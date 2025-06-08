import Navbar from "../components/navbar";

export default function NavbarLayout({ children }) {
  return (
    <>
      <Navbar />
      <main className="container mt-4">{children}</main>
    </>
  );
}
