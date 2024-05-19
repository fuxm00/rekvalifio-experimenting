import jsonDb from "../../src/jsonDb.js";
import {jsonDbSchema} from "../../src/jsonDbSchema.js";
import {getFrontHeaderLinks} from "../../src/utils/frontHeaderLinks.js";
import {getFormatedOffers} from "../../src/utils/offers.js";

export const conditionsView = async (req, res) => {

    const headerLinks = await getFrontHeaderLinks()
    const content = await jsonDb.get(jsonDbSchema.conditions)
    const offers = await getFormatedOffers()

    res.render("front/conditions", {
        title: 'Obchodní podmínky',
        marked: null,
        headerLinks,
        content,
        offers
    } );
}