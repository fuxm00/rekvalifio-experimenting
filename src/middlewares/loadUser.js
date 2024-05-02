export default async (req, res, next) => {

    res.locals.user = null

    next()
}
