import { Navigation } from "../components/NavBar";
import img from "../assets/pictures/Photo 19-08-2023, 15 42 24.jpg";
import { Button } from "../components/button";

export const Pricing = () => {
  return (
    <>
      <Navigation />
      <div className=" h-[90vh] hmin-fit flex justify-center items-center p-4">
        <div className="w-[80%] flex flex-wrap justify-center xl:justify-between  items-center  ">
          <img src={img} alt="product" className="w-[30rem] mr-4 " />
          <div className=" my-4 xl:w-[40%]">
            <h1 className="font-bold mb-4 text-2xl">
              Simple pricing. <br /> Just $9/month.
            </h1>
            <p className="py-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse ab
              omnis atque necessitatibus saepe asperiores, culpa optio
              dignissimos fugiat distinctio?
            </p>
            <Button>START TRACKING NOW</Button>
          </div>
        </div>
      </div>
    </>
  );
};
