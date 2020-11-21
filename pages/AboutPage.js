import Banner from './Banner';
import Appbar from './components/Appbar';
import ChooseSmartAutos from './ChooseSmartAutos';
import ListingProcess from './ListingProcess';
import Testimonials from './Testimonials';


const AboutPage = () => {
  return (
    <>
      <main>
        <section
          style={{
            backgroundImage: 'url(https://i.imgur.com/wqyGRZi.png)',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            // width: '100%',
            height: '400px',
          }}
        >
          <Appbar />
          <Banner />
        </section>
        <section className="pl-16 pr-16">
          <ChooseSmartAutos />
          <ListingProcess />
        </section>
        <Testimonials />
      </main>
    </>
  );
};
export default AboutPage;
