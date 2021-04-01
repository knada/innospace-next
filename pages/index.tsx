import styled from 'styled-components'
import airtable from '../Airtable'
import Hero from '../components/Hero/Hero'
import Layout from '../components/Layout/Layout'

const HeaderWithBg = styled.div`
    width: 100%;
    height: 780px;
    background-image: linear-gradient(
        hsla(0, 0%, 10%, 0.9),
        hsla(0, 0%, 10%, 0.9)
    );
    display: flex;
`

const tableName = 'Hero'

export async function getStaticProps() {
    const data = await airtable(tableName).find('recHu3lxl0R1xFLeR')
    const main = await data.get('Main')
    const sub = await data.get('Sub')

    return {
        props: {
            main,
            sub,
        },
    }
}

export default function Home({ main, sub }) {
    return (
        <Layout>
            <HeaderWithBg>
                <Hero main={main} sub={sub} />
            </HeaderWithBg>
        </Layout>
    )
}
