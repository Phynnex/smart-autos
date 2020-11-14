import React from "react";
import PopularBrand from "./PopularBrands";
import BrandList from "./BrandList";

const PopularCarBrands = () => {
  return (
    <>
      <h1 className="text-4xl font-bold flex justify-center mt-10 mr-10">Popular Car Brands</h1>
      <p className="flex justify-center align-middle">Pick a car from the most popular brands</p>
      <section className="mt-10 grid grid-cols-4 gap-4 ml-16">
        {BrandList.map(({ img, brand, number }) => (
          <PopularBrand img={img} brand={brand} number={number} />
        ))}
      </section>
    </>
  );
};
export default PopularCarBrands;
