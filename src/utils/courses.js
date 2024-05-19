import {getAllCourses} from "../db/courses.js";
import {getCategoryById} from "../db/courseCategories.js";

export const getCoursesWithCategory = async () => {
    const courses = await getAllCourses()
    for (const course of courses) {
        course.category = await getCategoryById(course.categoryId)
    }
    return courses
}