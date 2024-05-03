import {getAllCourses, updateCourse} from "../../src/db/courses.js";
import {saveContent} from "../../src/utils/contentHandler.js";

export const adminContentView = async (req, res) => {

    res.render("admin/content", {
        title: 'Obsah',
    });
}

export const changeLogo = async (req, res) => {

    const {filename, fieldname} = req.file
    await saveContent(fieldname, filename)

    res.redirect('back')
}