import jsonDb from "../../src/jsonDb.js";
import {jsonDbSchema} from "../../src/jsonDbSchema.js";
import {getFrontHeaderLinks} from "../../src/utils/frontHeaderLinks.js";
import {getFormatedOffers} from "../../src/utils/offers.js";

export const gdprView = async (req, res) => {

    const headerLinks = await getFrontHeaderLinks()
    const content = await jsonDb.get(jsonDbSchema.gdpr)
    const offers = await getFormatedOffers()

    res.render("front/gdpr", {
        title: 'Ochrana osobních údajů',
        marked: null,
        headerLinks,
        content,
        offers,
    } );
}