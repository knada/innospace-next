import React from 'react'
import styled from 'styled-components'

import InnerContainer from '../../InnerContainer/InnerContainer'
import ContactForm from './ContactForm'
import ContactDetails from './ContactDetails'
import Map from '../../Map/Map'

type contactType = {
    id: string
    fields: {
        Phone?: string
        Email?: string
        Address?: string
    }
}

type ContactContentProps = {
    contactsData: contactType[]
}

const ContactContainer = styled(InnerContainer)`
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-between;
    padding-bottom: 4rem;

    @media screen and (max-width: 600px) {
        /* justify-content: center;
        align-items: center; */
    }
`

const ContactContent: React.FC<ContactContentProps> = ({ contactsData }) => {
    return (
        <>
            <ContactContainer>
                <ContactForm />
                <ContactDetails contactsData={contactsData} />
            </ContactContainer>
            <Map width={'100%'} />
        </>
    )
}

export default ContactContent
