import {createCourse} from "../../src/db/courses.js";

export const homeView = async (req, res) => {

    res.render("front/home", {
        title: 'Domů',
        marked: 'home'
    } );
}