import {
    createCourse,
    getAllCourses,
    getCourseById,
    removeCourseById,
    updateCourse
} from "../../src/db/courses.js";

export const adminCoursesView = async (req, res) => {

    const courses = await getAllCourses()

    res.render("admin/courses", {
        title: 'kurzy',
        courses,
        course: null
    } );

}

export const adminCourseView = async (req, res) => {

    const courseId = req.params.id;

    const course = await getCourseById(courseId);

    res.render("admin/course", {
        title: 'Kurz',
        course,
    } );
}

export const addCourse = async (req, res) => {

    const title = String(req.body.title)
    const content = String(req.body.courseContent)

    await createCourse({title, content})

    res.redirect('back')
}

export const editCourse = async (req, res) => {

    const title = String(req.body.title)
    const content = String(req.body.courseContent)
    const courseId = req.params.id;

    await updateCourse({title, description, content}, courseId)

    res.redirect('/admin/courses')
}

export const removeCourse = async (req, res) => {
    const courseId = req.params.id;

    await removeCourseById(courseId);

    res.redirect('back')
}