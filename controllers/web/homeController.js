export const homeView = async (req, res) => {
    res.render("web/home", {
        title: 'Domů'
    } );
}