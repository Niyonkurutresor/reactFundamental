import { NavLink } from "react-router-dom";
export function NavBar() {
  return (
    <nav>
      <ul className="flex bg-orange-300 py-2 px-[10%] align-middle justify-around font-bold active:text-stone-600">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/product">products</NavLink>
        </li>
        <li>
          <NavLink to="/pricing">pricing</NavLink>
        </li>
      </ul>
    </nav>
  );
}
