import express from "express";
import {coursesView, courseView} from "../../controllers/front/coursesController.js";
import {addCourse, adminCoursesView, adminCourseView} from "../../controllers/admin/adminCourses.js";

const adminCourses = express.Router()

adminCourses.get("/admin/courses", adminCoursesView)
adminCourses.get("/admin/courses/:id", adminCourseView)
adminCourses.post("/admin/courses/add-course", addCourse)

export default adminCourses