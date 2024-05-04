import jsonDb from "../../src/jsonDb.js";

export const homeView = async (req, res) => {

    const logoName = await jsonDb.get('logo')
    const homeHeading = await jsonDb.get('home-title')
    const homeText = await jsonDb.get('home-text')

    res.render("front/home", {
        title: 'Domů',
        marked: 'home',
        logoName,
        homeHeading,
        homeText
    } );
}