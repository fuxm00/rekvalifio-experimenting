import jsonDb from "../../src/jsonDb.js";
import {jsonDbSchema} from "../../src/jsonDbSchema.js";

export const gdprView = async (req, res) => {

    const logoName = await jsonDb.get(jsonDbSchema.logo)
    const gdprContent = await jsonDb.get(jsonDbSchema.gdpr)

    res.render("front/gdpr", {
        title: 'Ochrana osobních údajů',
        marked: null,
        logoName,
        content: gdprContent
    } );
}