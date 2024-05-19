import {
    createCourse, getAllCourses, getCourseById, removeCourseById, updateCourse
} from "../../src/db/courses.js";
import {
    getAllCourseCategories, getCategoryById,
} from "../../src/db/courseCategories.js";
import {getCoursesWithCategory} from "../../src/utils/courses.js";

export const adminCoursesView = async (req, res) => {

    const courses = await getCoursesWithCategory()
    const categories = await getAllCourseCategories()

    res.render("admin/courses", {
        title: 'kurzy', courses, course: null, marked: "courses", categories
    });
}

export const adminCourseView = async (req, res) => {

    const courseId = req.params.id;
    const course = await getCourseById(courseId);
    const courses = await getCoursesWithCategory()
    const categories = await getAllCourseCategories()

    res.render("admin/courses", {
        title: 'Kurz', course, marked: 'courses', categories, courses
    });
}

export const addCourse = async (req, res) => {

    const {title, courseContent: content, category: categoryId} = req.body

    await createCourse({title, content, categoryId})

    res.redirect('back')
}

export const editCourse = async (req, res) => {

    const {title, courseContent: content, category: categoryId} = req.body
    const {id: courseId} = req.params;

    await updateCourse({title, content, categoryId}, courseId)

    res.redirect('/admin/courses')
}

export const removeCourse = async (req, res) => {
    const {id: courseId} = req.params;

    await removeCourseById(courseId);

    res.redirect('back')
}