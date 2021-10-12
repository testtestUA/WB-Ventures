import Head from 'next/head';
import About from '../components/About';
import Header from '../components/Header';
import Hero from '../components/Hero';
import DepartmentContainer from '../components/DepartmentsCard/CardsContainer';
import PropertyCards from '../components/PropertyCard/CardsContainer';
import OpenJobContainer from '../components/OpenJobCard/CardsContainer';
import Map from '../components/Map';
import Footer from '../components/Footer';

export default function Home() {
  const title = 'NEWS';

  return (
    <>
      <Head>
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css'
          integrity='sha512-YWzhKL2whUzgiheMoBFwW8CKV4qpHQAEuvilg9FAn5VJUDwKZZxkJNuGM4XkWuk94WCrrwslk8yWNGmY1EduTA=='
          crossorigin='anonymous'
          referrerpolicy='no-referrer'
        />
      </Head>
      <Header />
      <main>
        <article>
          <Hero title={title} />
          <About />
          <PropertyCards />
          <DepartmentContainer />
          <OpenJobContainer />
          <Map />
          <Footer />
        </article>
      </main>
    </>
  );
}
