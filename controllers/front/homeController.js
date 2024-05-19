import jsonDb from "../../src/jsonDb.js";
import {jsonDbSchema} from "../../src/jsonDbSchema.js";
import {getFrontHeaderLinks} from "../../src/utils/frontHeaderLinks.js";
import {getFormatedOffers} from "../../src/utils/offers.js";

export const homeView = async (req, res) => {

    const content = await jsonDb.get(jsonDbSchema.home)
    const headerLinks = await getFrontHeaderLinks()
    const offers = await getFormatedOffers()

    res.render("front/home", {
        title: 'Domů',
        marked: 'home',
        headerLinks,
        content,
        offers,
    } );
}