import { useCities } from "../contexts/info";

export function Countries() {
  const { d, k } = useCities();
  if (k) return <h1>Loading...</h1>;
  if (!d.length)
    return (
      <>
        <h1>Hi🏀🖐</h1> <p>there is no country you have ever visited.</p>
        <p>Please Select one by clicking on the map👉</p>
      </>
    );
  return d
    .reduce((initial, item) => {
      if (!initial.map((el) => el.country).includes(item.ountry))
        return [...initial, { country: item.ountry, emoje: item.emoje }];

      return initial;
    }, [])
    .map((item) => {
      return (
        <>
          <div className="w-40 h-20 text-center bg-stone-500 rounded-xl br-yellow-400 mb-2 pt-4 ">
            <p>{item.emoje}</p>
            <p className="font-bold mt-2">{item.country}</p>
          </div>
        </>
      );
    });
}
