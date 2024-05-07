import db from "../db.js";

export const getAllCourseCategories = async () => {
    let query = db('courseCategories').select('*')

    const categories = await query

    return categories
}

export const createCategory = async (data) => {
    await db('courseCategories').insert(data)
}