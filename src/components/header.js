import "../App.css";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="header">
      <ul>
        <li>
          {" "}
          <Link to={"/"}>Home</Link>
        </li>

        <li>
          {" "}
          <Link to={"/about"}>About</Link>
        </li>
        <li>
          <Link to={"/contact"}>Contact</Link>
        </li>
        <li>
          <Link to={"*"}>Error</Link>
        </li>
      </ul>
    </div>
  );
}
export default Header;
