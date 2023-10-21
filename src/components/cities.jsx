import { Link, useParams } from "react-router-dom";
import { BackButton } from "./button";
import { useCities } from "../contexts/info";
import { useEffect } from "react";
export function City() {
  const { d, k } = useCities();
  // forming date
  const formatDate = (date) =>
    new Intl.DateTimeFormat("en", {
      day: "numeric",
      manth: "long",
      year: "numeric",
    }).format(new Date(date));
  // end of forming date
  if (k) return <h1>Loading....</h1>;
  if (!d.length)
    return (
      <>
        <h1>Hi🏀🖐</h1> <p>there is no city selected yet</p>
        <p>Select one by clicking on the map👉</p>
      </>
    );
  else {
    return (
      <>
        {d.map((item) => {
          const { id, emoje, cityName, position } = item;
          return (
            <div
              className="flex justify-between p-2 mb-4 rounded-lg bg-stone-500"
              key={id}
            >
              <Link to={`${id}?lat=${position.lat}&&lng=${position.lng}`}>
                <p>
                  <span>{emoje}</span>
                  {cityName}
                </p>
                <p>
                  {formatDate(item.date)}
                  <span className="font-bold text-lg text-red-400 hover:pointer">
                    X
                  </span>
                </p>
              </Link>
            </div>
          );
        })}
      </>
    );
  }
}

export function CityDetalis() {
  const { currentCity: city, getcity, k } = useCities();
  const { id } = useParams();
  const { emoje, cityName, date, notes } = city;
  useEffect(
    function () {
      getcity(id);
    },
    [id]
  );
  if (k) return <h1> Loading....</h1>;
  return (
    <div className="p-8 bg-stone-500 my-8 rounded-xl">
      <h1 className="font-bold text-xl pb-4">
        <span>{emoje}</span> Berline
      </h1>
      <p>YOU WENT TO {cityName} ON</p>
      <p>{date}</p>
      <br />
      <p>YOUR NOTES</p>
      <p>{notes}</p>
      <br />
      <p>LEARN MORE</p>
      <Link to={"wikipedia"}>
        <p className="text-yellow-300 underline">
          {" "}
          Check out berlin on Wikipedia <span>-{">"}</span>
        </p>
      </Link>
      <BackButton>Back</BackButton>
    </div>
  );
}
