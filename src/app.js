import express from "express";
import contacts from "../routes/front/contacts.js";
import home from "../routes/front/home.js";
import courses from "../routes/front/courses.js";
import admin from "../routes/admin/admin.js";


export const app = express()

app.set('view engine', 'ejs')

app.use(express.static('public'))

//front
app.use(home)
app.use(contacts)
app.use(courses)

//admin
app.use(admin)

//404
app.use((req, res) => {
    console.log('404', req.method, req.url)
    res.render('front/404')
})
