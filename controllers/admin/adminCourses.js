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
import {createCourseType, getAllCourseTypes, getTypeById} from "../../src/db/courseTypes.js";

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
    const types = await getAllCourseTypes()

    res.render("admin/coursesCategories", {
        title: 'kurzy',
        categories,
        marked: "categories",
        category: null,
        types

    } );
}

export const adminCoursesTypesView = async (req, res) => {

    const types = await getAllCourseTypes()

    res.render("admin/coursesTypes", {
        title: 'kurzy',
        types,
        marked: "types",
        type: null
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
    const type = await getTypeById(category.id)
    const categories = await getAllCourseCategories()
    const types = await getAllCourseTypes()

    res.render("admin/coursesCategories", {
        title: 'kurzy',
        categories,
        marked: "categories",
        category: category,
        types,
        type
    } );
}

export const addCourse = async (req, res) => {

    const {title, courseContent: content, category: categoryId} = req.body

    await createCourse({title, content, categoryId})

    res.redirect('back')
}

export const addType = async (req, res) => {

    const {title} = req.body
    console.log(title)

    await createCourseType({title})

    res.redirect('back')
}

export const addCategory = async (req, res) => {

    const {categoryTitle: title, categoryContent: content, typeId} = req.body

    await createCategory({title, content, typeId})

    res.redirect('back')
}

export const editCategory = async (req, res) => {

    const {categoryTitle: title, categoryContent: content, typeId} = req.body
    const {id: categoryId} = req.params;

    await updateCategory({title, content, typeId}, categoryId)

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