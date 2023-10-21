import { Navigation } from "../components/NavBar";
import img from "../assets/pictures/Photo 19-08-2023, 15 42 24.jpg";

export const Product = () => {
  return (
    <>
      <Navigation />
      <div className=" h-[90vh] hmin-fit flex justify-center items-center p-4">
        <div className="w-[80%] flex flex-wrap justify-center xl:justify-between  items-center  ">
          <img src={img} alt="product" className="w-[30rem] mr-4" />
          <div className=" my-4 xl:w-[40%]">
            <h1 className="font-bold mb-4 text-2xl">About WorldWide.</h1>
            <p className="py-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam eos repellat aliquid nemo quis accusamus eum provident.
              Quis aliquam perspiciatis, consectetur accusantium veritatis
              corporis sequi necessitatibus excepturi, sapiente quibusdam
              dolores explicabo ut perferendis beatae cumque ullam dignissimos
              natus incidunt. Eius?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse ab
              omnis atque necessitatibus saepe asperiores, culpa optio
              dignissimos fugiat distinctio?
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
