import Head from 'next/head'
import Intro from '../components/Intro'
import Services from '../components/Services'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Personal Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Intro></Intro>
      <Services></Services>
    </div>
  )
}
