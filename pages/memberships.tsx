import MembershipsContent from '../components/PageContent/MembershipsContent/MembershipsContent'
import PageTemplate from '../components/PageTemplate/PageTemplate'
import getTableData from '../utils/getTableData'

const memberships = {
    openDesk: 'Open Desk',
    openMemberships: 'Open Memberships',
    privateOffice: 'Private Office',
    meeting: 'Meeting Room',
    multipurpose: 'Multipurpose Centre',
}

// const getTableData = tableName => {
//     return new Promise((resolve, reject) => {
//         airtable(tableName)
//             .select()
//             .firstPage((err, records) => {
//                 if (err) return reject(err)
//                 return resolve(
//                     records.map(record => {
//                         return {
//                             id: record.id,
//                             fields: record.fields,
//                         }
//                     })
//                 )
//             })
//     })
// }

export const getStaticProps = async () => {
    const openDesk = await getTableData(memberships.openDesk)
    const openMemberships = await getTableData(memberships.openMemberships)
    const privateOffice = await getTableData(memberships.privateOffice)
    const meeting = await getTableData(memberships.meeting)
    const multipurpose = await getTableData(memberships.multipurpose)
    return {
        props: {
            openDesk,
            openMemberships,
            privateOffice,
            meeting,
            multipurpose,
        },
    }
}

export default function Memberships({
    openDesk,
    openMemberships,
    privateOffice,
    meeting,
    multipurpose,
}) {
    return (
        <PageTemplate heading="Our Memberships">
            <MembershipsContent
                openDesk={openDesk}
                openMemberships={openMemberships}
                privateOffice={privateOffice}
                meeting={meeting}
                multipurpose={multipurpose}
            />
        </PageTemplate>
    )
}
