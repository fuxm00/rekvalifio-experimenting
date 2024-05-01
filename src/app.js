import express from "express";
import contacts from "../routes/front/contacts.js";
import home from "../routes/front/home.js";
import courses from "../routes/front/courses.js";
import admin from "../routes/admin/admin.js";
import adminCourses from "../routes/admin/adminCourses.js";


export const app = express()

app.set('view engine', 'ejs')

app.use(express.static('public'))
app.use(express.urlencoded({extended: false}))

//front
app.use(home)
app.use(contacts)
app.use(courses)

//admin
app.use(admin)
app.use(adminCourses)

//404
app.use((req, res) => {
    console.log('404', req.method, req.url)
    res.render('404')
})
