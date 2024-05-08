import jsonDb from "../../src/jsonDb.js";

export const adminContentView = async (req, res) => {

    const homeContent = await jsonDb.get('home-content')
    const coursesContent = await jsonDb.get('courses-content')
    const contactsContent = await jsonDb.get('contacts-content')

    res.render("admin/content", {
        title: 'Obsah',
        homeContent,
        coursesContent,
        contactsContent
    });
}

export const changeLogo = async (req, res) => {

    const {filename, fieldname} = req.file
    await jsonDb.set(fieldname, filename);

    res.redirect('back')
}

export const changeHomeTexts = async (req, res) => {

    const {homeContent, coursesContent, contactsContent} = req.body;

    await jsonDb.set('home-content', homeContent);
    await jsonDb.set('courses-content', coursesContent);
    await jsonDb.set('contacts-content', contactsContent);

    res.redirect('back')
}