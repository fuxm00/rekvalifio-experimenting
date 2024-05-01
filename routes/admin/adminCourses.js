import express from "express";
import {coursesView, courseView} from "../../controllers/front/coursesController.js";
import {adminCoursesView, adminCourseView} from "../../controllers/admin/adminCourses.js";

const adminCourses = express.Router()

adminCourses.get("/admin/courses", adminCoursesView)
adminCourses.get("/admin/courses/:id", adminCourseView)

export default adminCourses