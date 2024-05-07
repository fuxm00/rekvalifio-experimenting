import {getAllCourses, getCourseById} from "../../src/db/courses.js";
import {createOrder, getOrderById} from "../../src/db/orders.js";
import jsonDb from "../../src/jsonDb.js";

const logoName = await jsonDb.get('logo')

export const coursesView = async (req, res) => {

    const courses = await getAllCourses()
    const coursesContent = await jsonDb.get('courses-content')

    res.render("front/courses", {
        title: 'Kurzy',
        marked: 'courses',
        courses,
        logoName,
        coursesContent
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

    const courseId = req.params.id;

    const course = await getCourseById(courseId);

    res.render("front/order", {
        title: 'Kurz',
        marked: 'courses',
        course,
        logoName
    } );
}

export const placeOrder = async (req, res) => {

    const courseId = req.params.id;
    const note = req.body.note;
    const order = await createOrder({courseId, note})

    res.redirect(`/course/order-complete/${order.id}`);
}

export const orderCompleteView = async (req, res) => {

    const orderId = req.params.id;
    const order = await getOrderById(orderId)

    res.render("front/orderComplete", {
        title: 'Kurz',
        marked: 'courses',
        order,
        logoName
    } );
}



