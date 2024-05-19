import jsonDb from "../../src/jsonDb.js";
import {jsonDbSchema} from "../../src/jsonDbSchema.js";
import {getFrontHeaderLinks} from "../../src/utils/getFrontHeaderLinks.js";
import {getFormatedOffers} from "../../src/utils/getFormatedOffers.js";

export const homeView = async (req, res) => {

    const homeContent = await jsonDb.get(jsonDbSchema.home)
    const headerLinks = await getFrontHeaderLinks()
    const offers = await getFormatedOffers()

    res.render("front/home", {
        title: 'Domů',
        marked: 'home',
        headerLinks,
        homeContent,
        offers,
    } );
}