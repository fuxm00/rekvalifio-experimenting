import {getCourseById, getCoursesByCategoryId} from "../../src/db/courses.js";
import {createOrder} from "../../src/db/orders.js";
import jsonDb from "../../src/jsonDb.js";
import {getAllCourseCategories, getCategoryById} from "../../src/db/courseCategories.js";

const logoName = await jsonDb.get('logo')

export const coursesView = async (req, res) => {

    const categories = await getAllCourseCategories()
    const coursesContent = await jsonDb.get('courses-content')

    res.render("front/courses", {
        title: 'Kurzy',
        marked: 'courses',
        categories,
        logoName,
        coursesContent
    } );
}

export const categoryView = async (req, res) => {

    const categoryId = req.params.id;
    const category = await getCategoryById(categoryId)
    const courses = await getCoursesByCategoryId(categoryId);

    res.render("front/category", {
        title: 'Kurzy',
        marked: 'courses',
        logoName,
        category,
        courses
    } );
}

export const orderSummaryView = async (req, res) => {

    const session = req.session
    const courseId = req.session.courseId
    const course = await getCourseById(courseId)


    res.render("front/orderSummary", {
        title: 'Kurzy',
        marked: 'courses',
        logoName,
        session,
        course,
    } );
}

export const courseView = async (req, res) => {

    const courseId = req.params.id;

    const course = await getCourseById(courseId);

    res.render("front/course", {
        title: 'Kurz',
        marked: 'courses',
        course,
        logoName
    } );
}

export const courseOrderView = async (req, res) => {

    const {id: courseId} = req.params;
    const {note, email, phone} = req.session;

    const course = await getCourseById(courseId);

    res.render("front/order", {
        title: 'Kurz',
        marked: 'courses',
        course,
        logoName,
        note,
        email,
        phone,
    } );
}

export const placeOrder = async (req, res) => {

    const {id: courseId} = req.params;
    const {note, email, phone} = req.session;

    const order = await createOrder({courseId, note, email, phone})
    req.session.regenerate(function(err) {})

    res.redirect(`/course/order-complete/${order.id}`);
}

export const proceedOrder = async (req, res) => {

    req.session.note = req.body.note
    req.session.email = req.body.email
    req.session.phone = req.body.phone

    req.session.courseId = req.params.id;

    res.redirect(`/course/order-summary`);
}

export const orderCompleteView = async (req, res) => {

    const orderId = req.params.id;

    res.render("front/orderComplete", {
        title: 'Kurz',
        marked: 'courses',
        orderId,
        logoName
    } );
}



