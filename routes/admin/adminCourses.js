import express from "express";
import {
    addCourse,
    adminCoursesView,
    adminCourseView,
    editCourse,
    removeCourse
} from "../../controllers/admin/adminCoursesController.js";
import {
    addCategory,
    adminCoursesCategoriesView,
    adminCoursesCategoryView,
    editCategory, removeCategory
} from "../../controllers/admin/adminCourseCateoriesController.js";
import {
    addType,
    adminCoursesTypesView,
    adminCoursesTypeView, editType,
    removeType
} from "../../controllers/admin/adminCourseTypesController.js";
import auth from "../../src/middlewares/auth.js";
import loadToastMessages from "../../src/middlewares/loadToastMessages.js";

const adminCourses = express.Router()

adminCourses.get("/admin/courses/categories", auth, loadToastMessages, adminCoursesCategoriesView)
adminCourses.get("/admin/courses/categories/:id", auth, loadToastMessages, adminCoursesCategoryView)
adminCourses.get("/admin/courses/remove-category/:id", auth, loadToastMessages, removeCategory)

adminCourses.get("/admin/courses/types", auth, loadToastMessages, adminCoursesTypesView)
adminCourses.get("/admin/courses/types/:id", auth, loadToastMessages, adminCoursesTypeView)
adminCourses.post("/admin/courses/add-type", auth, addType)
adminCourses.post("/admin/courses/edit-type/:id", auth, editType)
adminCourses.get("/admin/courses/remove-type/:id", auth, loadToastMessages, removeType)

adminCourses.get("/admin/courses", auth, loadToastMessages, adminCoursesView)
adminCourses.get("/admin/courses/:id", auth, loadToastMessages, adminCourseView)
adminCourses.post("/admin/courses/add-course", auth, addCourse)
adminCourses.post("/admin/courses/edit-course/:id", auth, editCourse)
adminCourses.get("/admin/courses/remove-course/:id", auth, loadToastMessages, removeCourse)

adminCourses.post("/admin/courses/add-category", auth, addCategory)
adminCourses.post("/admin/courses/edit-category/:id", auth, editCategory)


export default adminCourses