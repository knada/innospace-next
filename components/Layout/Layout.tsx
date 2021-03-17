import Head from 'next/head'
import MainNav from '../MainNav/MainNav'
import styles from './Layout.module.css'

const Layout = ({ children }) => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Innospace</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <MainNav />
            {children}
        </div>
    )
}

export default Layout
