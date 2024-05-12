import {createCourseType, getAllCourseTypes} from "../../src/db/courseTypes.js";

export const adminCoursesTypesView = async (req, res) => {

    const types = await getAllCourseTypes()

    res.render("admin/coursesTypes", {
        title: 'kurzy', types, marked: "types", type: null
    });
}

export const addType = async (req, res) => {

    const {title} = req.body
    console.log(title)

    await createCourseType({title})

    res.redirect('back')
}