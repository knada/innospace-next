import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Innospace</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1>Home page</h1>
        </div>
    )
}
