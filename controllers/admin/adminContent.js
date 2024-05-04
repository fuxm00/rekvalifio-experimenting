import jsonDb from "../../src/jsonDb.js";

export const adminContentView = async (req, res) => {

    const homeHeading = await jsonDb.get('home-title')
    const homeText = await jsonDb.get('home-text')

    res.render("admin/content", {
        title: 'Obsah',
        homeHeading,
        homeText
    });
}

export const changeLogo = async (req, res) => {

    const {filename, fieldname} = req.file
    await jsonDb.set(fieldname, filename);

    res.redirect('back')
}

export const changeHomeTexts = async (req, res) => {

    const {homeTitle, homeText} = req.body

    await jsonDb.set('home-title', homeTitle);
    await jsonDb.set('home-text', homeText);

    res.redirect('back')
}