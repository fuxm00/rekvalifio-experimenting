import jsonDb from "../../src/jsonDb.js";
import {jsonDbSchema} from "../../src/jsonDbSchema.js";
import {getFrontHeaderLinks} from "../../src/utils/frontHeaderLinks.js";
import {getFormatedOffers} from "../../src/utils/offers.js";

export const contactsView = async (req, res) => {

    const headerLinks = await getFrontHeaderLinks()
    const contactsContent = await jsonDb.get(jsonDbSchema.contacts)
    const offers = await getFormatedOffers()

    res.render("front/contacts", {
        title: 'Kontakty',
        marked: 'contacts',
        headerLinks,
        contactsContent,
        offers
    } );
}