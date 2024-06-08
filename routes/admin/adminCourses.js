import express from "express";
import {
    addCourse, adminCoursesView, adminCourseView, editCourse, removeCourse
} from "../../controllers/admin/adminCoursesController.js";
import {
    addCategory, adminCoursesCategoriesView, adminCoursesCategoryView, editCategory, removeCategory
} from "../../controllers/admin/adminCourseCateoriesController.js";
import {
    addType, adminCoursesTypesView, adminCoursesTypeView, editType, removeType
} from "../../controllers/admin/adminCourseTypesController.js";
import auth from "../../src/middlewares/loggedIn.js";
import loadToastMessages from "../../src/middlewares/loadToastMessages.js";
import loadUser from "../../src/middlewares/loadUser.js";
import approveRights from "../../src/middlewares/Approved.js";

const adminCourses = express.Router()

adminCourses.get("/admin/courses/categories", loadUser, auth, approveRights, loadToastMessages, adminCoursesCategoriesView)
adminCourses.get("/admin/courses/categories/:id", loadUser, auth, approveRights, loadToastMessages, adminCoursesCategoryView)
adminCourses.get("/admin/courses/remove-category/:id", loadUser, auth, approveRights, loadToastMessages, removeCategory)

adminCourses.get("/admin/courses/types", loadUser, auth, approveRights, loadToastMessages, adminCoursesTypesView)
adminCourses.get("/admin/courses/types/:id", loadUser, auth, approveRights, loadToastMessages, adminCoursesTypeView)
adminCourses.post("/admin/courses/add-type", loadUser, auth, approveRights, addType)
adminCourses.post("/admin/courses/edit-type/:id", loadUser, auth, approveRights, editType)
adminCourses.get("/admin/courses/remove-type/:id", loadUser, auth, approveRights, loadToastMessages, removeType)

adminCourses.get("/admin/courses", loadUser, auth, approveRights, loadToastMessages, adminCoursesView)
adminCourses.get("/admin/courses/:id", loadUser, auth, approveRights, loadToastMessages, adminCourseView)
adminCourses.post("/admin/courses/add-course", loadUser, auth, approveRights, addCourse)
adminCourses.post("/admin/courses/edit-course/:id", loadUser, auth, approveRights, editCourse)
adminCourses.get("/admin/courses/remove-course/:id", loadUser, auth, approveRights, loadToastMessages, removeCourse)

adminCourses.post("/admin/courses/add-category", loadUser, auth, approveRights, addCategory)
adminCourses.post("/admin/courses/edit-category/:id", loadUser, auth, approveRights, editCategory)


export default adminCourses