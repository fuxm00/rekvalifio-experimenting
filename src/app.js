import express from "express";
import contacts from "../routes/contacts.js";
import home from "../routes/home.js";
import courses from "../routes/courses.js";


export const app = express()

app.set('view engine', 'ejs')

app.use(home)
app.use(contacts)
app.use(courses)

app.use((req, res) => {
    console.log('404', req.method, req.url)
    res.render('web/404')
})
