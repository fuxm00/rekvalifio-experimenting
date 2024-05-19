import {
    createCourseType, getAllCourseTypes, getTypeById, removeTypeById, updateType
} from "../../src/db/courseTypes.js";

export const adminCoursesTypesView = async (req, res) => {

    const types = await getAllCourseTypes()

    res.render("admin/coursesTypes", {
        title: 'kurzy', types, marked: "types", type: null
    });
}

export const adminCoursesTypeView = async (req, res) => {

    const typeId = req.params.id;
    const type = await getTypeById(typeId);

    const types = await getAllCourseTypes()

    res.render("admin/coursesTypes", {
        title: 'kurzy', types, marked: "types", type: type
    });
}

export const addType = async (req, res) => {

    const {title} = req.body

    await createCourseType({title})

    res.redirect('back')
}

export const editType = async (req, res) => {

    const {title} = req.body
    const {id: typeId} = req.params;

    await updateType({title}, typeId)

    res.redirect('/admin/courses/types')
}

export const removeType = async (req, res) => {
    const {id: typeId} = req.params;

    await removeTypeById(typeId);

    res.redirect('back')
}