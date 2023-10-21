import { Button, BackButton } from "./button";
export function Form() {
  return (
    <>
      <form className="p-8 bg-stone-500 my-8 rounded-xl min-w-[20rem]">
        <label htmlFor="cityName" className="block mb-1 mt-2 ">
          City Name
        </label>
        <input
          type="text"
          name="cityName"
          id="cityName"
          className="w-full rounded-lg outline-none text-stone-900 px-4"
        />
        <label htmlFor="date" className="block mb-1 mt-2 ">
          When did you go to XXXX
        </label>
        <input
          type="datetime-local"
          name="date"
          id="date"
          className="w-full rounded-lg outline-none text-stone-900 px-4"
        />
        <label htmlFor="notes" className="block mb-1 mt-2 ">
          Notes about your trip to XXXX
        </label>
        <textarea
          name="notes"
          id="notex"
          placeholder="Notex"
          className="p-2 w-full h-40 rounded-lg outline-none text-stone-900 p-4"
        ></textarea>
        <Button>ADD</Button>
        <BackButton>BACK</BackButton>
      </form>
    </>
  );
}
