import Head from 'next/head';
import About from '../components/About';
import Header from '../components/Header';
import Hero from '../components/Hero';
import DepartmentContainer from '../components/DepartmentsCard/CardsContainer';
import PropertyCards from '../components/PropertyCard/CardsContainer';
import OpenJobContainer from '../components/OpenJobCard/CardsContainer';
import Map from '../components/Map';
import dynamic from 'next/dynamic';

export default function Home() {
  const title = 'NEWS';

  return (
    <>
      <Head></Head>
      <Header />
      <main>
        <article>
          <Hero title={title} />
          <About />
          <PropertyCards />
          <DepartmentContainer />
          <OpenJobContainer />
          <Map />
        </article>
      </main>
    </>
  );
}
