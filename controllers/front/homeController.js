export const homeView = async (req, res) => {
    res.render("front/home", {
        title: 'Domů'
    } );
}