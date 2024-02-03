import React from "react";
import { carData } from "./carData";

interface carData {
  id: number;
  idTag: string;
  src: string;
  carName: string;
  anchorTag: string;
}

const Hero: React.FC = () => {
  const carElements = carData.map((car, index) => (
    <section key={index} id={car.idTag} className="car_section">
      <img src={car.src} alt={car.alt} className="car_image" />

      <div className="car_details transform_50">
        <h1 className="model_name">{car.carName}</h1>
        <h2 className="tag_line">
          Order Online for <br className="hidden sm:inline md:hidden" />
          <span className="underline cursor-pointer hover:text-blue-600 underline-offset-4 ">
            Touchless Delivery{" "}
          </span>
        </h2>
      </div>

      <div className="car_buttons transform_50">
        <button className="btn hover:bg-green-400 hover:text-black">
          Custom Order
        </button>
        <button className="btn inventory hover:bg-amber-400">
          Existing Inventory
        </button>
      </div>

      <a href={`#${car.anchorTag}`}>
        <svg
          className="down_svg"
          viewBox="0 0 30 30"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke="var(--tds-icon--fill, #171a20)"
            stroke-width="1.5"
            d="m19.5 12.5-4.5 4-4.5-4"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </a>
    </section>
  ));

  return <div>{carElements}</div>;
};

export default Hero;
