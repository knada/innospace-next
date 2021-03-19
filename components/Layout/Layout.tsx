import Head from 'next/head'
import styled from 'styled-components'
import Footer from '../Footer/Footer'
import MainNav from '../MainNav/MainNav'

const Main = styled.main``

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>Innospace</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <MainNav />
            <Main>{children}</Main>
            <Footer />
        </>
    )
}

export default Layout
