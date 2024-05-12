export const adminUserView = async (req, res) => {

    res.render("admin/users", {
        title: 'users'
    });
}