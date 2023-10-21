import { useNavigate } from "react-router-dom";

export const Button = ({ children, navigateTo }) => {
  const navigateto = useNavigate();
  return (
    <>
      <button
        className="px-4 py-2 mx-4 my-4 bg-green-500 text-stone-900 rounded-lg font-bold"
        onClick={() => navigateto(navigateTo)}
      >
        {children}
      </button>
    </>
  );
};

export const BackButton = ({ children }) => {
  const navigateto = useNavigate();
  return (
    <>
      <button
        className="px-4 py-2 mx-4 my-4  text-stone-900 rounded-lg font-bold bg-white"
        onClick={(e) => {
          e.preventDefault();
          return navigateto(-1);
        }}
      >
        {children}
      </button>
    </>
  );
};
