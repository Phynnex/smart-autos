import React from 'react';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import PopularBrand from './PopularBrands';
import BrandList from './BrandList';

const PopularCarBrands = () => {
  return (
    <>
      <h1 className="text-4xl font-bold flex justify-center mt-10 mr-10">Popular Car Brands</h1>
      <p className="flex justify-center">Pick a car from the most popular brands</p>
      <section className="mt-10 grid grid-cols-4 gap-4 ml-16">
        {BrandList.map(({ img, brand, number }) => (
          <PopularBrand img={img} brand={brand} number={number} />
        ))}
      </section>
      <div className=" flex mt-10 ml-16">
        <p className="font-bold">See all popular brands</p>
        <ArrowForwardIosIcon style={{ fontSize: 'small', marginTop: 4, marginLeft: 4 }} className="" />
      </div>
    </>
  );
};
export default PopularCarBrands;
