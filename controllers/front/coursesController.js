import {getAllCourses, getCourseById, getCoursesByCategoryId} from "../../src/db/courses.js";
import {createOrder, getOrderById} from "../../src/db/orders.js";
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



