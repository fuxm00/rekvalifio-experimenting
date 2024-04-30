import express from "express";
import contacts from "../routes/web/contacts.js";
import home from "../routes/web/home.js";
import courses from "../routes/web/courses.js";


export const app = express()

app.set('view engine', 'ejs')

app.use(express.static('public'))

app.use(home)
app.use(contacts)
app.use(courses)

app.use((req, res) => {
    console.log('404', req.method, req.url)
    res.render('web/404')
})
