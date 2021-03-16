import Head from 'next/head'
import Nav from '../Nav/Nav'
import styles from './Layout.module.css'

const Layout = ({ children }) => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Innospace</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Nav />
            {children}
        </div>
    )
}

export default Layout
