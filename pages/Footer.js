import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";

const Footer = () => {
  return (
    <>
      <section className="bg-gray-500 rounded-lg">
        <section className="grid grid-cols-4 pr-16 pl-16 pt-6 pb-10">
          <div>
            <h1 className="text-xl font-extrabold">ABOUT</h1>
            <ul className="pt-4 text-base">
              <li>How Smart Autos work</li>
            </ul>
          </div>
          <div>
            <h1 className="text-xl font-extrabold">POPULAR BRANDS</h1>
            <ul className="text-base pt-4">
              <li className="pb-2">Audi</li>
              <li className="pb-2">BMW</li>
              <li className="pb-2">Ford</li>
              <li className="pb-2">Mercedes Benz</li>
              <li className="pb-2">Nissan</li>
              <li className="pb-2">Toyota</li>
              <li className="pb-2">Bentley</li>
              <li className="pb-2">Lamboghene</li>
            </ul>
          </div>
          <div>
            <h1 className="text-xl font-extrabold">TOP CITIES</h1>
            <ul className="text-base pt-4">
              <li className="pb-2">Lagos</li>
              <li className="pb-2">Port Harcourt</li>
              <li className="pb-2">Abuja</li>
              <li className="pb-2">Kano</li>
              <li className="pb-2">Owerri</li>
              <li className="pb-2">Ibadan</li>
            </ul>
          </div>
          <div>
            <h1 className="text-2xl font-extrabold">SUPPORT</h1>
            <ul className="text-lg pt-4">
              <li>Help Center</li>
            </ul>
          </div>
        </section>
        <hr className="border-solid border-black" />
        <div className="pr-16 pl-16 pt-4 pb-2 flex justify-between">
          <p>(c) 2020 Smart Autos. All rights reserved. Privacy. Terms</p>
          <div>
            <TwitterIcon className="pr-2" />
            <FacebookIcon className="pr-2" />
            <InstagramIcon className="pr-2" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
