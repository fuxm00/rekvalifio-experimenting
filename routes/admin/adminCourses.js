import express from "express";
import {
    addCategory,
    addCourse, adminCoursesCategoriesView, adminCoursesCategoryView,
    adminCoursesView,
    adminCourseView, editCategory,
    editCourse,
    removeCourse
} from "../../controllers/admin/adminCourses.js";

const adminCourses = express.Router()

adminCourses.get("/admin/courses/categories", adminCoursesCategoriesView)
adminCourses.get("/admin/courses/categories/:id", adminCoursesCategoryView)

adminCourses.get("/admin/courses", adminCoursesView)
adminCourses.get("/admin/courses/:id", adminCourseView)

adminCourses.post("/admin/courses/add-course", addCourse)
adminCourses.post("/admin/courses/edit-course/:id", editCourse)

adminCourses.get("/admin/courses/remove-course/:id", removeCourse)

adminCourses.post("/admin/courses/add-category", addCategory)
adminCourses.post("/admin/courses/edit-category/:id", editCategory)


export default adminCourses