import {contactsView} from "../controllers/contactsController.js";
import express from "express";
import {coursesView} from "../controllers/coursesController.js";

const courses = express.Router()

courses.get("/courses", coursesView)

export default courses