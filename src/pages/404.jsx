import { useNavigate } from "react-router-dom";

export const ErrorPage = () => {
  const navigateTo = useNavigate();
  return (
    <div className="h-screen flex justify-center items-center font-bold text-center text-red-500">
      <div>
        <h1 className="text-4xl mb-8 ">Page not found</h1>
        <h1 className="text-2xl">
          Pleas contact suport team for further support
        </h1>
        <p
          className="text-yellow-500 underline text-sm text-left mt-[10%]"
          onClick={() => navigateTo("/")}
        >
          contact our surport team
        </p>
      </div>
    </div>
  );
};
