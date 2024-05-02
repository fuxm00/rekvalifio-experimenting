import express from "express";
import {
    addCourse,
    adminCoursesView,
    adminCourseView,
    editCourse,
    removeCourse
} from "../../controllers/admin/adminCourses.js";

const adminCourses = express.Router()

adminCourses.get("/admin/courses", adminCoursesView)
adminCourses.get("/admin/courses/:id", adminCourseView)
adminCourses.post("/admin/courses/add-course", addCourse)
adminCourses.get("/admin/courses/remove-course/:id", removeCourse)
adminCourses.post("/admin/courses/edit-course/:id", editCourse)

export default adminCourses