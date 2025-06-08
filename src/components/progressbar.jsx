import { Link } from "react-router-dom";
import '../styles/navbar.css'
export default function Progressbar() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="#home">Home</Link>
          </li>
          <li>
            <Link to="#news">News</Link>
          </li>
          <li>
            <Link to="#contact">Contact</Link>
          </li>
          <li>
            <Link className="active" to="#about">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

