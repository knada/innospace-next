import styled from 'styled-components'

import InnerContainer from '../InnerContainer/InnerContainer'
import Button from '../Button/Button'

type HeroProps = {
    scrollToMap?: any
    main: string
    sub: string
}

const HeroContainer = styled(InnerContainer)`
    text-align: center;
    margin: auto;
`

const HeroHeading = styled.h1`
    font-size: 50px;
    font-weight: 600;
    line-height: 1.2;
    color: hsl(0, 0%, 99%);
    width: 70%;
    margin: 1rem auto;
    @media screen and (max-width: 960px) {
        font-size: 42px;
        width: 80%;
    }
    @media screen and (max-width: 600px) {
        font-size: 36px;
        width: 90%;
    }
`

const HeroSubtitle = styled.h2`
    font-size: 20px;
    font-weight: 400;
    line-height: 1.5;
    color: hsl(0, 0%, 95%);
    width: 78%;
    margin: 1rem auto;
    @media screen and (max-width: 960px) {
        font-size: 18px;
        width: 85%;
    }
    @media screen and (max-width: 600px) {
        font-size: 16px;
        width: 100%;
    }
`

const HeroButton = styled(Button)`
    width: 200px;
    height: 50px;
    line-height: 50px;
    font-size: 24px;
    margin-top: 1rem;
    &:hover,
    &:active {
        background-color: ${props => props.theme.colors.innospaceGreen};
        color: white;
    }
`

const Hero: React.FC<HeroProps> = ({ main, sub, scrollToMap }) => {
    return (
        <HeroContainer>
            <HeroHeading>{main}</HeroHeading>
            <HeroSubtitle>{sub}</HeroSubtitle>
            <HeroButton onClick={scrollToMap}>Visit Us!</HeroButton>
        </HeroContainer>
    )
}

export default Hero
