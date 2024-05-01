export const contactsView = async (req, res) => {
    res.render("front/contacts", {
        title: 'Kontakty',
        marked: 'contacts'
    } );
}