import jsonDb from "../../src/jsonDb.js";

export const contactsView = async (req, res) => {

    const logoName = await jsonDb.get('logo')
    const contactsContent = await jsonDb.get('contacts-content')

    res.render("front/contacts", {
        title: 'Kontakty',
        marked: 'contacts',
        logoName,
        contactsContent
    } );
}