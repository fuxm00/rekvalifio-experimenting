import {getAllCourses, getCourseById} from "../../src/db/courses.js";
import {createOrder} from "../../src/db/orders.js";
import jsonDb from "../../src/jsonDb.js";

const logoName = await jsonDb.get('logo')

export const coursesView = async (req, res) => {

    const courses = await getAllCourses()

    //TODO temp
    const courseId = 1
    await createOrder({courseId})

    res.render("front/courses", {
        title: 'Kurzy',
        marked: 'courses',
        courses,
        logoName
    } );
}

export const courseView = async (req, res) => {

    const courseId = req.params.id;

    const course = await getCourseById(courseId);

    res.render("front/course", {
        title: 'Kurz',
        marked: null,
        course,
        logoName
    } );
}

export const courseOrderView = async (req, res) => {

    const courseId = req.params.id;

    const course = await getCourseById(courseId);

    res.render("front/order", {
        title: 'Kurz',
        marked: null,
        course,
        logoName
    } );
}