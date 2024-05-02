import {getAllCourses} from "../../src/db/courses.js";

export const adminContentView = async (req, res) => {

    res.render("admin/content", {
        title: 'Obsah',
    } );

}