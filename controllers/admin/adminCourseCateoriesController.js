import {
    createCategory, getCategoryById, removeCategoryById, updateCategory
} from "../../src/db/courseCategories.js";
import {getAllCourseTypes, getTypeById} from "../../src/db/courseTypes.js";
import {getCategoriesWithType} from "../../src/utils/categories.js";

export const adminCoursesCategoriesView = async (req, res) => {

    const categories = await getCategoriesWithType()
    const types = await getAllCourseTypes()

    res.render("admin/coursesCategories", {
        title: 'kurzy', categories, marked: "categories", category: null, types

    });
}

export const adminCoursesCategoryView = async (req, res) => {

    const categoryId = req.params.id;
    const category = await getCategoryById(categoryId);
    const type = await getTypeById(category.id)
    const categories = await getCategoriesWithType()
    const types = await getAllCourseTypes()

    res.render("admin/coursesCategories", {
        title: 'kurzy', categories, marked: "categories", category: category, types, type
    });
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

export const removeCategory = async (req, res) => {
    const {id: categoryId} = req.params;

    await removeCategoryById(categoryId);

    res.redirect('back')
}