import express from "express";
import contacts from "../routes/front/contacts.js";
import home from "../routes/front/home.js";
import courses from "../routes/front/courses.js";
import admin from "../routes/admin/admin.js";
import adminCourses from "../routes/admin/adminCourses.js";
import loadUser from "./middlewares/loadUser.js";
import adminOrders from "../routes/admin/adminOrders.js";
import adminContent from "../routes/admin/adminContent.js";
import session from "express-session";
import conditions from "../routes/front/conditions.js";
import gdpr from "../routes/front/gdpr.js";


export const app = express()

app.set('view engine', 'ejs')

app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(session({
        secret: 'secret key',
        saveUninitialized: false,
        resave: false
    }
))
app.use(loadUser)

app.use(home)
app.use(contacts)
app.use(courses)
app.use(conditions)
app.use(gdpr)

app.use(admin)
app.use(adminCourses)
app.use(adminOrders)
app.use(adminContent)

app.use((req, res) => {
    console.log('404', req.method, req.url)
    res.render('404')
})
