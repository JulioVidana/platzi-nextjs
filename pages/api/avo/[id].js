import DB from '../../../database/db'

const allAvos = async (request, response) => {
    try {

        const db = new DB()
        const id = request.query.id

        const entry = await db.getById(id)

        response.status(200).json(entry)
    } catch (e) {
        console.error(e)
        response.status(400).end()
    }
}

export default allAvos