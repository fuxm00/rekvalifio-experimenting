import {contactsView} from "../../controllers/front/contactsController.js";
import express from "express";
import {coursesView, courseView} from "../../controllers/front/coursesController.js";

const courses = express.Router()

courses.get("/courses", coursesView)

courses.get('/courses/:id', courseView)

export default courses