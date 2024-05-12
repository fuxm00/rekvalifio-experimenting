import {
    createCourse,
    getAllCourses,
    getCourseById,
    removeCourseById,
    updateCourse
} from "../../src/db/courses.js";
import {
    createCategory,
    getAllCourseCategories,
    getCategoryById,
    updateCategory
} from "../../src/db/courseCategories.js";

export const adminCoursesView = async (req, res) => {

    const courses = await getAllCourses()
    const categories = await getAllCourseCategories()

    res.render("admin/courses", {
        title: 'kurzy',
        courses,
        course: null,
        marked: "courses",
        categories
    } );
}

export const adminCoursesCategoriesView = async (req, res) => {

    const categories = await getAllCourseCategories()

    res.render("admin/coursesCategories", {
        title: 'kurzy',
        categories,
        marked: "categories",
        category: null
    } );
}

export const adminCourseView = async (req, res) => {

    const courseId = req.params.id;

    const course = await getCourseById(courseId);

    const categories = await getAllCourseCategories()

    res.render("admin/course", {
        title: 'Kurz',
        course,
        categories,
        marked: 'courses'
    } );
}

export const adminCoursesCategoryView = async (req, res) => {

    const categoryId = req.params.id;
    const category = await getCategoryById(categoryId);
    const categories = await getAllCourseCategories()

    res.render("admin/coursesCategories", {
        title: 'kurzy',
        categories,
        marked: "categories",
        category: category
    } );
}

export const addCourse = async (req, res) => {

    const {title, courseContent: content, category: categoryId} = req.body

    await createCourse({title, content, categoryId})

    res.redirect('back')
}

export const addCategory = async (req, res) => {

    const {categoryTitle: title, categoryContent: content} = req.body

    await createCategory({title, content})

    res.redirect('back')
}

export const editCategory = async (req, res) => {

    const {categoryTitle: title, categoryContent: content} = req.body
    const {id: categoryId} = req.params;

    await updateCategory({title, content}, categoryId)

    res.redirect('/admin/courses/categories')
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