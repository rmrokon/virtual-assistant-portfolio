import Head from 'next/head'
import Intro from '../components/Intro'
import Services from '../components/Services'
import styles from '../styles/Home.module.css'
import { data } from '../data'
import Testimonials from '../components/Testimonials'

export default function Home({ services }) {

  return (
    <div className={styles.container}>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Personal Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Intro></Intro>
      <Services services={services}></Services>
      <Testimonials />
    </div>
  )
}


export const getStaticProps = async () => {
  const services = data;
  return {
    props: { services }
  };
};