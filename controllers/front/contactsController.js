import jsonDb from "../../src/jsonDb.js";
import {jsonDbSchema} from "../../src/jsonDbSchema.js";
import {getFrontHeaderLinks} from "../../src/utils/getFrontHeaderLinks.js";
import {getFormatedOffers} from "../../src/utils/getFormatedOffers.js";

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