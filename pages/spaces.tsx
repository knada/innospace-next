import airtable from '../Airtable'
import SpacesContent from '../components/PageContent/SpacesContent/SpacesContent'
import PageTemplate from '../components/PageTemplate/PageTemplate'

const tableName = 'Spaces'

const getSpaces = () => {
    return new Promise((resolve, reject) => {
        airtable(tableName)
            .select()
            .firstPage((err, records) => {
                if (err) return reject(err)
                return resolve(
                    records.map(record => {
                        return {
                            id: record.id,
                            space: record.get('Space'),
                            description: record.get('Description'),
                            image: record.get('Attachments')[0],
                        }
                    })
                )
            })
    })
}

export const getStaticProps = async () => {
    console.log(await getSpaces())
    return {
        props: {
            spaces: await getSpaces(),
        },
    }
}

export default function Spaces({ spaces }) {
    return (
        <PageTemplate heading="Our Spaces">
            <SpacesContent spaces={spaces} />
        </PageTemplate>
    )
}
