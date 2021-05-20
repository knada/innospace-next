import styled from 'styled-components'
import InnerContainer from '../../InnerContainer/InnerContainer'

const MembershipSection = styled.section``

const MembershipContainer = styled(InnerContainer)``

const MembershipDiv = styled.div`
    margin: 3rem 0;
`

const MembershipTitle = styled.h3`
    font-family: 'Muli', Arial, Helvetica, sans-serif;
    margin-top: 0.5rem;
`

const MembershipBodyText = styled.p`
    margin: 0.5rem 0 1rem 0;
    @media screen and (min-width: 992px) {
        max-width: 66.66%;
    }
`

const MembershipTable = styled.table`
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
    border-collapse: collapse;
    border-bottom: 2px solid hsl(170, 98%, 30%);
    border-radius: 0.5rem;
`
const MembershipTableHead = styled.thead`
    background-color: hsl(170, 98%, 30%);
    color: white;
`
const TableRow = styled.tr`
    &:nth-of-type(even) {
        background-color: hsl(0, 0%, 90%);
    }
`

const TableHeader = styled.th`
    padding: 0.5rem;
    border: hsl(170, 98%, 30%);
`
const TableBody = styled.tbody``

const TableData = styled.td`
    @media screen and (max-width: 992px) {
        min-width: 100px;
    }
    padding: 0.5rem;
    &:nth-of-type(even) {
        text-align: center;
    }
`

const MembershipsContent = () => {
    return (
        <MembershipSection>
            <MembershipContainer>
                <MembershipDiv>
                    <MembershipTitle>Packages</MembershipTitle>
                    <MembershipBodyText>
                        Our Co working spaces offer you a great ambiance and
                        support to boost your productivity. Whether you are a
                        start-up on a lean budget, a maturing or matured
                        enterprise or a freelancer, we can give you a great
                        value for your money. Our facility comes with additional
                        services such as WiFi, copy centre, multipurpose hall,
                        tea/coffee, private lockable and furnished offices and
                        signage display.{' '}
                    </MembershipBodyText>
                </MembershipDiv>
            </MembershipContainer>
        </MembershipSection>
    )
}

export default MembershipsContent
