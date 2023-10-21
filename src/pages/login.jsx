import { Navigation } from "../components/NavBar";
import { Button } from "../components/button";

export const Login = () => {
  return (
    <>
      <Navigation />
      <div className="flex justify-center items-center h-[90vh] w-full ">
        <form className="p-8 w-[30rem] bg-stone-600 rounded-md">
          <label htmlFor="Email">Email address</label>
          <input
            type="email"
            name="Email"
            id="email"
            className="block w-full rounded-lg mb-2 px-2 py-1 outline-none"
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="Password"
            id="password"
            className="block w-full rounded-lg mb-2 px-2 py-1 outline-none"
          />
          <Button navigateTo={"/app"}>Login</Button>
        </form>
      </div>
    </>
  );
};
