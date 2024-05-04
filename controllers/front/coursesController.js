import {getAllCourses, getCourseById} from "../../src/db/courses.js";
import {getContentByKey} from "../../src/utils/contentHandler.js";
import {createOrder} from "../../src/db/orders.js";

const logoName = await getContentByKey('logo')

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