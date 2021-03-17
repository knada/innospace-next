import { ThemeProvider, createGlobalStyle } from 'styled-components'
import theme from '../theme'

const GlobalStyles = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    body {
        font-family: 'Poppins', Arial, Helvetica, sans-serif;
        font-style: normal;
        text-rendering: optimizeLegibility;
        scroll-behavior: smooth;
    }
`

function MyApp({ Component, pageProps }) {
    return (
        <>
            <GlobalStyles />
            <ThemeProvider theme={theme}>
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    )
}

export default MyApp
