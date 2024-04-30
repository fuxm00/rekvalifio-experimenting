import {contactsView} from "../../controllers/web/contactsController.js";
import express from "express";
import {coursesView} from "../../controllers/web/coursesController.js";

const courses = express.Router()

courses.get("/courses", coursesView)

export default courses