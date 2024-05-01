import express from "express";
import {coursesView, courseView} from "../../controllers/front/coursesController.js";
import {addCourse, adminCoursesView, adminCourseView, removeCourse} from "../../controllers/admin/adminCourses.js";

const adminCourses = express.Router()

adminCourses.get("/admin/courses", adminCoursesView)
adminCourses.get("/admin/courses/:id", adminCourseView)
adminCourses.post("/admin/courses/add-course", addCourse)
adminCourses.get("/admin/courses/remove-course/:id", removeCourse)

export default adminCourses