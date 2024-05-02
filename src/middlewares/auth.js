export default (req, res, next) => {

    if (true) {
        next()
    } else {
        res.redirect('/admin/login')
    }
}
