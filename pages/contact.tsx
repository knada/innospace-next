import ContactContent from '../components/PageContent/ContactContent/ContactContent'
import PageTemplate from '../components/PageTemplate/PageTemplate'
import getTableData from '../utils/getTableData'

const tableName = 'Contacts'

export const getStaticProps = async () => {
    const contactsData = await getTableData(tableName)
    return {
        props: {
            contactsData,
        },
    }
}

export default function Contact({ contactsData }) {
    return (
        <PageTemplate heading="Contact Us">
            <ContactContent contactsData={contactsData} />
        </PageTemplate>
    )
}
