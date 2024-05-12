import jsonDb from "../../src/jsonDb.js";
import {jsonDbSchema} from "../../src/jsonDbSchema.js";

export const contactsView = async (req, res) => {

    const logoName = await jsonDb.get(jsonDbSchema.logo)
    const contactsContent = await jsonDb.get(jsonDbSchema.contacts)

    res.render("front/contacts", {
        title: 'Kontakty',
        marked: 'contacts',
        logoName,
        contactsContent
    } );
}