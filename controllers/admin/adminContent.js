import {getAllCourses, updateCourse} from "../../src/db/courses.js";
import {saveContent} from "../../src/utils/contentHandler.js";

export const adminContentView = async (req, res) => {

    res.render("admin/content", {
        title: 'Obsah',
    } );
}

export const changeLogo = async (req, res) => {

    const fileName = req.file.filename

    await saveContent(fileName)

    res.redirect('back')
}