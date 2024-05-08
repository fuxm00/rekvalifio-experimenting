import express from "express";
import {
    coursesView,
    courseOrderView,
    courseView,
    orderCompleteView,
    placeOrder, categoryView, proceedOrder, orderSummaryView
} from "../../controllers/front/coursesController.js";

const courses = express.Router()

courses.get("/courses", coursesView)
courses.get("/course-category/:id", categoryView)
courses.get("/course/order-summary", orderSummaryView)
courses.get('/course/:id', courseView)
courses.get('/course/order/:id', courseOrderView)
courses.get('/course/order-complete/:id', orderCompleteView)

courses.post("/course/order-proceed/:id", proceedOrder)
courses.post('/course/place-order/:id', placeOrder)




export default courses