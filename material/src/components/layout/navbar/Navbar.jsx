import CartWidget from "../../common/cartWidget/CartWidget";

export const Navbar = () => {
  return (
    <div>
      <h4>Logo</h4>
      <ul>
        <li>Todas</li>
        <li>Urbanas</li>
            <li>Deportivas</li>
            <li><CartWidget /></li>
      </ul>
    </div>
  );
}