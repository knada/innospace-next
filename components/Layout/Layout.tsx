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
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap"
                    rel="stylesheet"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Mulish:wght@400;600;700&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <MainNav />
            <Main>{children}</Main>
            <Footer />
        </>
    )
}

export default Layout
