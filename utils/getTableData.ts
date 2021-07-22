import airtable from '../Airtable'

const getTableData = tableName => {
    return new Promise((resolve, reject) => {
        airtable(tableName)
            .select()
            .firstPage((err, records) => {
                if (err) return reject(err)
                return resolve(
                    records.map(record => {
                        return {
                            id: record.id,
                            fields: record.fields,
                        }
                    })
                )
            })
    })
}

export default getTableData
