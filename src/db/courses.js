import db from "../db.js";

export const getAllCourses = async () => {
    let query = db('courses').select('*')

    const courses = await query

    return courses
}

export const createCourse = async (data) => {
    await db('courses').insert(data)
}

export const getCourseById = async (id) => {
    const course = await db('courses').select('*').where('id', id).first()

    return course
}