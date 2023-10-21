import { NavLink } from "react-router-dom";
import { Button } from "./button";
import { Logo } from "./Logo";

export const Navigation = () => {
  return (
    <nav className=" flex items-center justify-between font-bold px-20">
      <div className="flex items-center justify-between">
          <Logo />
      </div>
      <ul className="flex items-center w-[50%] justify-between active:text-stone-600">
        <li></li>
        <li>
          <NavLink to={"/product"}>Product</NavLink>
        </li>
        <li>
          <NavLink to={"/pricing"}>Pricing</NavLink>
        </li>
        <li>
          <NavLink to={"/login"}>
            <Button>Login</Button>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
