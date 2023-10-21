import { useNavigate } from "react-router-dom";
import { Logo } from "./Logo";
export function AppNav() {
  const navigateTo = useNavigate();
  return (
    <>
      <div className="text-center mb-10">
        <Logo />
        <button
          className="bg-stone-600 px-2 py-1 rounded-lg mr-4 mt-20"
          onClick={() => navigateTo("cities")}
        >
          CITIES
        </button>
        <button
          className="bg-stone-600 px-2 py-1 rounded-lg mr-4"
          onClick={() => navigateTo("countries")}
        >
          COUNTRIES
        </button>
      </div>
    </>
  );
}
