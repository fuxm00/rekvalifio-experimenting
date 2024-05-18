import express from "express";
import {
    addCourse,
    adminCoursesView,
    adminCourseView,
    editCourse,
    removeCourse
} from "../../controllers/admin/adminCourses.js";
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

const adminCourses = express.Router()

adminCourses.get("/admin/courses/categories", adminCoursesCategoriesView)
adminCourses.get("/admin/courses/categories/:id", adminCoursesCategoryView)
adminCourses.get("/admin/courses/remove-category/:id", removeCategory)

adminCourses.get("/admin/courses/types", adminCoursesTypesView)
adminCourses.get("/admin/courses/types/:id", adminCoursesTypeView)
adminCourses.post("/admin/courses/add-type", addType)
adminCourses.post("/admin/courses/edit-type/:id", editType)
adminCourses.get("/admin/courses/remove-type/:id", removeType)

adminCourses.get("/admin/courses", adminCoursesView)
adminCourses.get("/admin/courses/:id", adminCourseView)
adminCourses.post("/admin/courses/add-course", addCourse)
adminCourses.post("/admin/courses/edit-course/:id", editCourse)
adminCourses.get("/admin/courses/remove-course/:id", removeCourse)

adminCourses.post("/admin/courses/add-category", addCategory)
adminCourses.post("/admin/courses/edit-category/:id", editCategory)


export default adminCourses