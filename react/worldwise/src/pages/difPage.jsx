import { Link } from "react-router-dom";
import {
  Outlet,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";

export const Fragments = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export const PagOne = () => {
  return (
    <>
      <p>page one</p>
    </>
  );
};

export const PagTwo = () => {
  return (
    <>
      <p>page two</p>
    </>
  );
};

export const PagThree = () => {
  return (
    <>
      <p>page three</p>
    </>
  );
};

// useParams, useSearchParams:for queries, useNavigate Hooks
export const SpecificP = () => {
  let { id } = useParams();
  const navigateTo = useNavigate();
  // we use navigate hook once we cant use the link was.
  // if we put link inside here it will be like product/id/newLink
  const [searchLoc, setSearchLoc] = useSearchParams();

  const lat = searchLoc.get("lat");
  const lon = searchLoc.get("lon");
  return (
    <div className="bg-stone-700 text-white h-[100vh]">
      <h1>Chilck any where any where to go to the root/product page</h1>
      <br />
      <p>product that should be desplayed iswith id: {`${id}`}</p>
      {lat && lon && (
        <p>
          The query string Latitude: {lat}, Longitude: {lon}
        </p>
      )}
      <Link to={"continue"}>
        <p>hover this link to know more</p>
      </Link>
      <button
        onClick={() => setSearchLoc({ lat: 12345, lon: 54321 })}
        className="bg-orange-500 text-gray-50 py-2 px-4 rounded-md"
      >
        set lat and long
      </button>
      <button
        // you can put -1,-2 whatever the steps you want to go back
        onClick={() => navigateTo(-1)}
        className="bg-orange-500 text-gray-50 py-2 px-4 rounded-md ml-4"
      >
        go back
      </button>
      <button
        onClick={() => navigateTo("/")}
        className="bg-orange-500 text-gray-50 py-2 px-4 rounded-md ml-4"
      >
        go to root
      </button>
    </div>
  );
};
