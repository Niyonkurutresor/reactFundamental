import LogoImage from "../assets/pictures/Photo 19-08-2023, 15 42 24.jpg";
import { NavLink } from "react-router-dom";
export const Logo = () => {
  return (
    <NavLink to={"/"}>
      <div className="flex justify-between w-[10rem] items-center py-2">
        <img
          src={LogoImage}
          alt="Logo"
          className="w-[3rem] h-[3rem] rounded-full mx-2"
        />
        <h1>WorldWise</h1>
      </div>
    </NavLink>
  );
};
