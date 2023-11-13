import { Link } from "react-router-dom";
import { NavBar } from "../components/pagNavcomponent";
export const Home = () => {
  return (
    <>
      <NavBar />
      <p className="bg-yellow-500">home</p>
      <Link to="/pricing">pricing</Link>
      <Link to="/product">product</Link>
    </>
  );
};
