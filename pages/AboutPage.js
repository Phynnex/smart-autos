import Banner from './Banner';
import Appbar from './components/Appbar';

const AboutPage = () => {
  return (
    <>
      <main>
        <section
          style={{
            backgroundImage: 'url(https://i.imgur.com/wqyGRZi.png)',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: '100%',
            height: '550px',
          }}
        >
          <Appbar />
          <Banner />
        </section>
      </main>
    </>
  );
};
export default AboutPage;
