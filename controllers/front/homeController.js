import jsonDb from "../../src/jsonDb.js";

export const homeView = async (req, res) => {

    const logoName = await jsonDb.get('logo')
    const homeContent = await jsonDb.get('home-content')

    res.render("front/home", {
        title: 'Domů',
        marked: 'home',
        logoName,
        homeContent
    } );
}