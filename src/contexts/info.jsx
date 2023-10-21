/* eslint-disable react/prop-types */
const BASE_URL = "http://localhost:8000";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useReducer,
} from "react";

const reducer = (prevState, action) => {
  switch (action.type) {
    case "loading":
      return { ...prevState, isLoading: true };
    case "stopLoading":
      return { ...prevState, isLoading: false };
    case "cities":
      console.log(prevState, action.payload);
      return { ...prevState, cities: action.payload, isLoading: false };
    default:
      return new Error("invalid Action");
  }
};

const citiesContext = createContext(null);
export function InformationProvider({ children }) {
  const initial = { cities: [], isLoading: true };
  const [{ cities, isLoading }, dispatch] = useReducer(reducer, initial);

  useEffect(() => {
    async function k() {
      try {
        dispatch({ type: "Loading" });
        const f = await fetch(`${BASE_URL}/data`);
        const found = await f.json();
        dispatch({ type: "cities", payload: found });
      } catch (error) {
        throw new Error("There was an error loading data");
      } finally {
        dispatch({ type: "stopLoading" });
      }
    }
    k();
  }, []);

  //useeffect
  const [k, setk] = useState(false);
  const [d, setd] = useState([]);
  const [currentCity, setCurrentCity] = useState({});
  useEffect(() => {
    async function k() {
      try {
        setk(true);
        const f = await fetch(`http://localhost:8000/data`);
        const found = await f.json();
        setd(found);
        localStorage.setItem("cities", found);
      } catch (error) {
        throw new Error("There was an error loading data");
      } finally {
        setk(false);
      }
    }
    k();
  }, []);
  //end of use effect
  //city
  async function getcity(id) {
    try {
      setk(true);
      const f = await fetch(`http://localhost:8000/data/${id}`);
      const found = await f.json();
      setCurrentCity(found);
    } catch (error) {
      throw new Error("There was an error loading data");
    } finally {
      setk(false);
    }
  }
  //end of city
  return (
    <citiesContext.Provider
      value={{ cities, isLoading, dispatch, k, d, currentCity, getcity }}
    >
      {children}
    </citiesContext.Provider>
  );
}

export const useCities = () => {
  const context = useContext(citiesContext);
  if (context === undefined)
    throw new Error("city context was used outside of the scope.");
  return context;
};
