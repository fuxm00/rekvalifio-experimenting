import {
    createCategory, getCategoryById, removeCategoryById, updateCategory
} from "../../model/db/courseCategories.js";
import {getAllCourseTypes, getTypeById} from "../../model/db/courseTypes.js";
import {getCategoriesWithType} from "../../src/utils/categories.js";
import {toastTypes} from "../../model/schema/toastTypes.js";

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
    const toastMessages = []

    !title ? toastMessages.push({type: toastTypes.warning, title: "Zadejte název kategorie"}) : null
    !typeId ? toastMessages.push({type: toastTypes.warning, title: "Zadejte typ kategorie"}) : null

    if (toastMessages.length < 1) {
        await createCategory({title, content, typeId})
        toastMessages.push({type: toastTypes.normal, title: "Kategorie přidána"})
    }

    req.session.toastMessages = toastMessages

    res.redirect('back')
}

export const editCategory = async (req, res) => {

    const {categoryTitle: title, categoryContent: content, typeId} = req.body
    const {id: categoryId} = req.params;

    const toastMessages = []

    !title ? toastMessages.push({type: toastTypes.warning, title: "Zadejte název kategorie"}) : null
    !typeId ? toastMessages.push({type: toastTypes.warning, title: "Zadejte typ kategorie"}) : null


    if (toastMessages.length < 1) {
        await updateCategory({title, content, typeId}, categoryId)
        toastMessages.push({type: toastTypes.normal, title: "Kategorie upravena"})
        req.session.toastMessages = toastMessages
        res.redirect('/admin/courses/categories')
    } else {
        req.session.toastMessages = toastMessages
        res.redirect('back')
    }
}

export const removeCategory = async (req, res) => {
    const {id: categoryId} = req.params;

    await removeCategoryById(categoryId);

    const toastMessages = []
    toastMessages.push({type: toastTypes.normal, title: "Kategorie odstraněna"})
    req.session.toastMessages = toastMessages

    res.redirect('back')
}