import jsonDb from "../../src/jsonDb.js";
import {jsonDbSchema} from "../../src/jsonDbSchema.js";
import {getFrontHeaderLinks} from "../../src/utils/getFrontHeaderLinks.js";
import {getFormatedOffers} from "../../src/utils/getFormatedOffers.js";

export const gdprView = async (req, res) => {

    const headerLinks = await getFrontHeaderLinks()
    const gdprContent = await jsonDb.get(jsonDbSchema.gdpr)
    const offers = await getFormatedOffers()

    res.render("front/gdpr", {
        title: 'Ochrana osobních údajů',
        marked: null,
        headerLinks,
        content: gdprContent,
        offers,
    } );
}