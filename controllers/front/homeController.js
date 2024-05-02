import {createCourse} from "../../src/db/courses.js";
import fs from "fs";
import {getContentByKey,} from "../../src/utils/contentHandler.js";

export const homeView = async (req, res) => {

    const logoName = await getContentByKey('logo')

    res.render("front/home", {
        title: 'Domů',
        marked: 'home',
        logoName
    } );
}