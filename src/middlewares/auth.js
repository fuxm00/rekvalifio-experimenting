export default (req, res, next) => {

    //TODO podmínka pro autentifikaci
    if (true) {
        next()
    } else {
        res.redirect('/admin/login')
    }
}
