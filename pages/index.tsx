import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Women, Life, Freedom.</title>
        <meta name="description" content="Women, Life, Freedom." />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          WLF Suomi
        </h1>
        <h2>Coming soon.</h2>
      </main>
    </div>
  )
}
