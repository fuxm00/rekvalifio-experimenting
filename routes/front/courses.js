import express from "express";
import {
    coursesView,
    courseOrderView,
    courseView,
    orderCompleteView,
    placeOrder, categoryView
} from "../../controllers/front/coursesController.js";

const courses = express.Router()

courses.get("/courses", coursesView)
courses.get("/course-category/:id", categoryView)
courses.get('/course/:id', courseView)
courses.get('/course/order/:id', courseOrderView)
courses.post('/course/place-order/:id', placeOrder)
courses.get('/course/order-complete/:id', orderCompleteView)



export default courses