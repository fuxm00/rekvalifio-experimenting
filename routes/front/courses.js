import {contactsView} from "../../controllers/front/contactsController.js";
import express from "express";
import {coursesView} from "../../controllers/front/coursesController.js";

const courses = express.Router()

courses.get("/courses", coursesView)

export default courses