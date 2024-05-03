import {getContentByKey} from "../../src/utils/contentHandler.js";

export const contactsView = async (req, res) => {

    const logoName = await getContentByKey('logo')

    res.render("front/contacts", {
        title: 'Kontakty',
        marked: 'contacts',
        logoName: logoName,
    } );
}