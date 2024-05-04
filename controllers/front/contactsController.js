import jsonDb from "../../src/jsonDb.js";

export const contactsView = async (req, res) => {

    const logoName = await jsonDb.get('logo')

    res.render("front/contacts", {
        title: 'Kontakty',
        marked: 'contacts',
        logoName: logoName,
    } );
}