import { NavBar } from "../components/pagNavcomponent";
import { Link } from "react-router-dom";
export function Product() {
  return (
    <>
      <NavBar />
      <h1 className="bg-yellow-500 font-bold text-xl">products</h1>
      <div>
        <Link to={`${1}?lat=100&&lon=200`}>
          <p>product one</p>
        </Link>
      </div>
      <div>
        <Link to={"2"}>
          <p>product two</p>
        </Link>
      </div>

      <div>
        <Link to={"3"}>
          <p>product theer</p>
        </Link>
      </div>
    </>
  );
}
