import express from "express";
import {courseOrderView, coursesView, courseView} from "../../controllers/front/coursesController.js";

const courses = express.Router()

courses.get("/courses", coursesView)
courses.get('/course/:id', courseView)
courses.get('/course/order/:id', courseOrderView)



export default courses