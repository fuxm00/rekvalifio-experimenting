import jsonDb from "../../src/jsonDb.js";
import {jsonDbSchema} from "../../src/jsonDbSchema.js";

export const homeView = async (req, res) => {

    const content = await jsonDb.get(jsonDbSchema.home)

    res.render("front/home", {
        title: 'Domů',
        marked: 'home',
        content,
    } );
}