export const adminView = async (req, res) => {
    res.render("admin/admin", {
        title: 'admin'
    } );
}

export const adminLoginView = async (req, res) => {
    res.render("admin/login", {
        title: 'login'
    } );
}