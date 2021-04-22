import styled from 'styled-components'
import { MainHeading } from '../Headings/Headings'
import Layout from '../Layout/Layout'

const PageHero = styled.div`
    width: 100%;
    height: 400px;
    background-color: hsla(151, 50%, 60%, 1);
    background-image: url('/assets/svg/leaf.svg');
    background-position: center;
    background-repeat: repeat;
    background-size: center;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 960px) {
        height: 300px;
    }
    @media screen and (max-width: 600px) {
        height: 200px;
    }
`

const PageHeroHeading = styled(MainHeading)`
    color: white;
`

const PageTemplate = ({ children, heading }) => {
    return (
        <Layout>
            <PageHero>
                <PageHeroHeading>{heading}</PageHeroHeading>
            </PageHero>
            {children}
        </Layout>
    )
}

export default PageTemplate
