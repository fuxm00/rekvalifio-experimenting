import jsonDb from "../../src/jsonDb.js";
import {jsonDbSchema} from "../../src/jsonDbSchema.js";

export const gdprView = async (req, res) => {

    const content = await jsonDb.get(jsonDbSchema.gdpr)

    res.render("front/gdpr", {
        title: 'Ochrana osobních údajů',
        marked: null,
        content,
    } );
}