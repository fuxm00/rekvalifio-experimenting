import jsonDb from "../../src/jsonDb.js";
import {jsonDbSchema} from "../../src/jsonDbSchema.js";

export const contactsView = async (req, res) => {

    const content = await jsonDb.get(jsonDbSchema.contacts)

    res.render("front/contacts", {
        title: 'Kontakty',
        marked: 'contacts',
        content,
    } );
}