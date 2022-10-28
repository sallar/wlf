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
          Women, Life, Freedom.
        </h1>
        <h2>Finland</h2>
      </main>
    </div>
  )
}
