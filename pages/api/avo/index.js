import DB from 'database/db'
import enablePublicAccess from 'cors'
const allAvos = async (request, response) => {

    try {
        // Generally, you would not want this in your apps.
        // See more in 'cors.js'
        await enablePublicAccess(request, response)

        const db = new DB()
        const allEntries = await db.getAll()
        const length = allEntries.length

        response.statusCode = 200
        response.setHeader("Content-type", "application/json")
        response.end(JSON.stringify({ data: allEntries, length }))
    } catch (e) {
        console.error(e)
        response.statusCode = 500
        response.end(
            JSON.stringify({ length: 0, data: [], error: 'something went wrong' })
        )
    }
}

export default allAvos