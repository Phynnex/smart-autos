import Banner from './Banner';
import Appbar from './components/Appbar';
import ChooseSmartAutos from './ChooseSmartAutos';
import ListingProcess from './ListingProcess';

const AboutPage = () => {
  return (
    <>
      <main>
        <section
          style={{
            backgroundImage: "url(https://i.imgur.com/wqyGRZi.png)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: "550px"
          }}>
          <Appbar />
          <Banner />
        </section>
        <section className="pl-16 pr-16">
          <ChooseSmartAutos />
        </section>
        <section>
          <ListingProcess />
        </section>
      </main>
    </>
  );
};
export default AboutPage;
