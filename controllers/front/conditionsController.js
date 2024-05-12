import jsonDb from "../../src/jsonDb.js";
import {jsonDbSchema} from "../../src/jsonDbSchema.js";

export const conditionsView = async (req, res) => {

    const logoName = await jsonDb.get(jsonDbSchema.logo)
    const conditionsContent = await jsonDb.get(jsonDbSchema.conditions)

    res.render("front/conditions", {
        title: 'Obchodní podmínky',
        marked: null,
        logoName,
        content: conditionsContent
    } );
}