import airtable from '../Airtable'
import AboutContent from '../components/PageContent/AboutContent/AboutContent'
import PageTemplate from '../components/PageTemplate/PageTemplate'

const tableName = 'About'

const getNotes = () => {
    return new Promise((resolve, reject) => {
        airtable(tableName)
            .select()
            .firstPage((err, records) => {
                if (err) return reject(err)
                return resolve(records.map(record => record.get('Notes')))
            })
    })
}

export const getStaticProps = async () => {
    return {
        props: {
            notes: await getNotes(),
        },
    }
}

export default function About({ notes }) {
    return (
        <PageTemplate heading="About Us">
            <AboutContent notes={notes} />
        </PageTemplate>
    )
}
