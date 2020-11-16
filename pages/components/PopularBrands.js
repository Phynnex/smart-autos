import React from 'react';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const PopularBrands = ({ img, brand, number }) => {
  return (
    <>
      <div className="bg-white rounded-lg overflow-hidden w-56 h-40 shadow-3xl">
        <img className="rounded-b-lg h-32 w-56" src={img} alt="audi" />
        <div className="pt-2">
          <span className="ml-2 ">{brand}</span>
          <span className="ml-2 ">{number}</span>
          <ArrowForwardIcon className="ml-2 " />
        </div>
      </div>
    </>
  );
};
export default PopularBrands;
