import { Navigation } from "../components/NavBar";
import { Button } from "../components/button";
import LogoImage from "../assets/pictures/Photo 19-08-2023, 15 42 24.jpg";
import { Link } from "react-router-dom";
export const LandingPage = () => {
  return (
    <div
      className="bg-cover bg-center h-screen text-white"
      style={{ backgroundImage: `url('${LogoImage}')` }}
    >
      <div className="absolute inset-0 bg-black opacity-70">
        <Navigation />
        <HomeBody />
      </div>
    </div>
  );
};

export const HomeBody = () => {
  return (
    <div className="text-center h-[90vh] flex justify-center items-center p-8">
      <div className=" h-fit mt-4 text-center">
        <h1 className="font-serif text-4xl text-center mb-8 ">
          You travel the world. <br /> World wise keeps track of your
          adventures.
        </h1>
        <p className="mb-8">
          A world map that tracks your footsteps into every cith youcan thnk of
          never forget your wonderful experiences. and hsow you friends how
          youhave wondered the world.
        </p>
        <Link to={"/login"}>
          <Button>START TRACKING NOW</Button>
        </Link>
      </div>
    </div>
  );
};
