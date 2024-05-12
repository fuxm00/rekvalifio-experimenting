import jsonDb from "../../src/jsonDb.js";
import {jsonDbSchema} from "../../src/jsonDbSchema.js";

export const homeView = async (req, res) => {

    const logoName = await jsonDb.get(jsonDbSchema.logo)
    const homeContent = await jsonDb.get(jsonDbSchema.home)

    res.render("front/home", {
        title: 'Domů',
        marked: 'home',
        logoName,
        homeContent
    } );
}