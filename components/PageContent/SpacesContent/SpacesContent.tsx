import { FC } from 'react'
import styled from 'styled-components'
import InnerContainer from '../../InnerContainer/InnerContainer'
import Space from '../../Spaces/Space/Space'

type SpacesPage = {
    spaces: any[]
}

const SpaceSection = styled.section``

const SpacesContainer = styled(InnerContainer)`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`

const SpaceDescription = styled.p`
    text-align: center;
    max-width: 500px;
    margin: 2rem auto 1.5rem auto;
`

const SpacesContent: FC<SpacesPage> = ({ spaces }) => {
    return (
        <SpaceSection>
            <SpaceDescription>
                We offer various affordable and flexible spaces for you specific
                needs with flexible requirements in a serene environment.
            </SpaceDescription>
            <SpacesContainer>
                {spaces.map(space => (
                    <Space
                        key={space.id}
                        space={space.space}
                        description={space.description}
                        image={space.image.url}
                    />
                ))}
            </SpacesContainer>
        </SpaceSection>
    )
}

export default SpacesContent
