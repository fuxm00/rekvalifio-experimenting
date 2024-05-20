import {
    createCourse, getCourseById, removeCourseById, updateCourse
} from "../../src/db/courses.js";
import {
    getAllCourseCategories,
} from "../../src/db/courseCategories.js";
import {getCoursesWithCategory} from "../../src/utils/courses.js";
import {toastTypes} from "../../src/toastTypes.js";

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

    const {title, courseContent: content, category: categoryId, price} = req.body

    const toastMessages = []

    !title ? toastMessages.push({type: toastTypes.warning, title: "Zadejte název kurzu"}) : null
    !categoryId ? toastMessages.push({type: toastTypes.warning, title: "Zadejte kategorii kurzu"}) : null
    !price ? toastMessages.push({type: toastTypes.warning, title: "Zadejte cenu kurzu"}) : null

    if (toastMessages.length < 1) {
        await createCourse({title, content, categoryId, price})
        toastMessages.push({type: toastTypes.normal, title: "Kurz přidán"})
    }

    req.session.toastMessages = toastMessages

    res.redirect('back')
}

export const editCourse = async (req, res) => {

    const {title, courseContent: content, category: categoryId, price} = req.body
    const {id: courseId} = req.params;
    const toastMessages = []

    !title ? toastMessages.push({type: toastTypes.warning, title: "Zadejte název kurzu"}) : null
    !categoryId ? toastMessages.push({type: toastTypes.warning, title: "Zadejte kategorii kurzu"}) : null
    !price ? toastMessages.push({type: toastTypes.warning, title: "Zadejte cenu kurzu"}) : null

    if (toastMessages.length < 1) {
        await updateCourse({title, content, categoryId, price}, courseId)
        toastMessages.push({type: toastTypes.normal, title: "Kurz upraven"})
        req.session.toastMessages = toastMessages
        res.redirect('/admin/courses')
    } else {
        req.session.toastMessages = toastMessages
        res.redirect('back')
    }


}

export const removeCourse = async (req, res) => {
    const {id: courseId} = req.params;

    await removeCourseById(courseId);

    const toastMessages = []
    toastMessages.push({type: toastTypes.normal, title: "Kurz smazán"})
    req.session.toastMessages = toastMessages

    res.redirect('back')
}