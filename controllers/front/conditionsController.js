import jsonDb from "../../src/jsonDb.js";
import {jsonDbSchema} from "../../src/jsonDbSchema.js";
import {getFrontHeaderLinks} from "../../src/utils/getFrontHeaderLinks.js";
import {getFormatedOffers} from "../../src/utils/getFormatedOffers.js";

export const conditionsView = async (req, res) => {

    const headerLinks = await getFrontHeaderLinks()
    const conditionsContent = await jsonDb.get(jsonDbSchema.conditions)
    const offers = await getFormatedOffers()

    res.render("front/conditions", {
        title: 'Obchodní podmínky',
        marked: null,
        headerLinks,
        content: conditionsContent,
        offers
    } );
}