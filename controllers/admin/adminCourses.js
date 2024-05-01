import {createCourse, getAllCourses, getCourseById} from "../../src/db/courses.js";

export const adminCoursesView = async (req, res) => {

    const courses = await getAllCourses()

    res.render("admin/courses", {
        title: 'kurzy',
        courses,
    } );

}

export const adminCourseView = async (req, res) => {

    const courseId = req.params.id;

    const course = await getCourseById(courseId);

    res.render("admin/course", {
        title: 'Kurz',
        course
    } );
}

export const addCourse = async (req, res) => {

    const title = String(req.body.title)
    const description = String(req.body.description)

    await createCourse({title, description})

    res.redirect('back')
}