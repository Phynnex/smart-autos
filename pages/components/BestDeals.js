import React from 'react';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const BestDeals = () => {
  return (
    <>
      <h1 className="font-bold text-lg mt-10 ml-16 mb-4">Best Deals</h1>
      <section className="grid grid-cols-4 gap-4 ml-6 pl-4 pl-12 pr-20 justify-center">
        <div className="bg-white rounded-lg overflow-hidden w-auto h-full ">
          <img
            className="rounded-b-lg w-auto h-64"
            src="https://tse1.mm.bing.net/th?id=OIP.gSXio3jtjyxqPpyh7XnPewHaE7&pid=Api&P=0&w=243&h=163"
            alt="Lexus"
          />
          <div className="pt-2 ml-2 block">
            <p>2018 Toyota Rav 4</p>
            <p>Mileage:12764 </p>
            <p>#1,700,000</p>
          </div>
        </div>

        <div className="bg-white rounded-lg overflow-hidden w-auto h-full ">
          <img
            className="rounded-b-lg w-auto h-64"
            src="https://s1.cdn.autoevolution.com/images/news/gallery/here-are-the-most-expensive-cars-you-can-buy-in-europe-in-2016_39.jpg"
            alt="Lexus"
          />
          <div className="pt-2 ml-2 block">
            <p>2018 Toyota Rav 4</p>
            <p>Mileage:12764 </p>
            <p>#1,700,000</p>
          </div>
        </div>
        <div className="bg-white rounded-lg overflow-hidden w-auto h-full ">
          <img
            className="rounded-b-lg w-auto h-64"
            src="https://tse3.mm.bing.net/th?id=OIP.YjCHLHiPKhd0OZNv4_OyVAHaEA&pid=Api&P=0&w=327&h=178"
            alt="Lexus"
          />
          <div className="pt-2 ml-2 block">
            <p>2018 Toyota Rav 4</p>
            <p>Mileage:12764 </p>
            <p>#1,700,000</p>
          </div>
        </div>
        <div className="bg-white rounded-lg overflow-hidden w-auto h-full ">
          <img
            className="rounded-b-lg w-auto h-64"
            src="https://tse4.mm.bing.net/th?id=OIP.cvZgPThoEvy9zf0WQcWOeAHaD5&pid=Api&P=0&w=307&h=162"
            alt="Lexus"
          />
          <div className="pt-2 ml-2 block">
            <p>2018 Toyota Rav 4</p>
            <p>Mileage:12764 </p>
            <p>#1,700,000</p>
          </div>
        </div>
      </section>
      <div className=" flex mt-10 ml-16">
        <p className="font-bold">See all brands</p>
        <ArrowForwardIosIcon
          style={{ fontSize: 'small', marginTop: 4, marginLeft: 4 }}
          className=""
        />
      </div>
    </>
  );
};
export default BestDeals;
