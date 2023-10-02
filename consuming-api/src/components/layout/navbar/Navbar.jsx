import CartWidget from "../../common/cartWidget/CartWidget";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <div>
      <ul className="navbar">
        <li>Logo</li>
        <li>Todas</li>
        <li>Urbanas</li>
        <li>Deportivas</li>
        <li><CartWidget /></li>
      </ul>
    </div>
  );
}