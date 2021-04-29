import { FC } from 'react'
import styled from 'styled-components'
import InnerContainer from '../../InnerContainer/InnerContainer'

type AboutPage = {
    text: string
}

const AboutSection = styled.section``

const AboutContainer = styled(InnerContainer)`
    display: flex;
    justify-content: center;
`

const TextSection = styled.div`
    @media screen and (min-width: 992px) {
        max-width: 66.66%;
        flex-basis: 66.66%;
    }
    @media screen and (min-width: 768px) {
        padding: 1rem;
    }
`

const AboutText = styled.p`
    font-size: 1rem;
    line-height: 1.5;
    letter-spacing: 0.03em;
    margin: 1rem;
`

const AboutContent: FC<AboutPage> = ({ text }) => {
    return (
        <AboutSection>
            <AboutContainer>
                <TextSection>
                    <AboutText>{text}</AboutText>
                </TextSection>
            </AboutContainer>
        </AboutSection>
    )
}

export default AboutContent
