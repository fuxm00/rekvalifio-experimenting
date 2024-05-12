import {getCourseById, getCoursesByCategoryId} from "../../src/db/courses.js";
import {createOrder} from "../../src/db/orders.js";
import jsonDb from "../../src/jsonDb.js";
import {getAllCourseCategories, getCategoryById} from "../../src/db/courseCategories.js";
import {createAddress} from "../../src/db/addresses.js";
import {jsonDbSchema} from "../../src/jsonDbSchema.js";

const logoName = await jsonDb.get(jsonDbSchema.logo)

export const coursesView = async (req, res) => {

    const categories = await getAllCourseCategories()
    const coursesContent = await jsonDb.get(jsonDbSchema.courses)

    res.render("front/courses", {
        title: 'Kurzy',
        marked: 'courses',
        categories,
        logoName,
        coursesContent
    });
}

export const categoryView = async (req, res) => {

    const categoryId = req.params.id;
    const category = await getCategoryById(categoryId)
    const courses = await getCoursesByCategoryId(categoryId);

    res.render("front/category", {
        title: 'Kurzy',
        marked: 'courses',
        logoName,
        category,
        courses
    });
}

export const orderSummaryView = async (req, res) => {

    const session = req.session
    const courseId = req.session.courseId
    const course = await getCourseById(courseId)


    res.render("front/orderSummary", {
        title: 'Kurzy',
        marked: 'courses',
        logoName,
        session,
        course,
    });
}

export const courseView = async (req, res) => {

    const courseId = req.params.id;

    const course = await getCourseById(courseId);

    res.render("front/course", {
        title: 'Kurz',
        marked: 'courses',
        course,
        logoName
    });
}

export const courseOrderView = async (req, res) => {

    const {id: courseId} = req.params;
    const {
        note,
        email,
        phone,
        billingStreet,
        billingCity,
        billingPostal,
        billingIc,
        billingDic,
        mailingStreet,
        mailingCity,
        mailingPostal
    } = req.session;

    const course = await getCourseById(courseId);

    res.render("front/order", {
        title: 'Kurz',
        marked: 'courses',
        course,
        logoName,
        note,
        email,
        phone,
        billingStreet,
        billingCity,
        billingPostal,
        billingIc,
        billingDic,
        mailingStreet,
        mailingCity,
        mailingPostal
    });
}

export const placeOrder = async (req, res) => {

    const {id: courseId} = req.params;
    const {
        note,
        email,
        phone,
        billingStreet,
        billingCity,
        billingPostal,
        billingIc,
        billingDic,
        mailingStreet,
        mailingCity,
        mailingPostal
    } = req.session;

    const billingAddress = await createAddress({
        street: billingStreet,
        city: billingCity,
        postal: billingPostal,
        ic: billingIc,
        dic: billingDic
    })

    const mailingAddress = await createAddress({
        street: mailingStreet,
        city: mailingCity,
        postal: mailingPostal,
    })

    const billingAddressId = billingAddress.id;
    const mailingAddressId = mailingAddress.id;

    const order = await createOrder({courseId, note, email, phone, billingAddressId, mailingAddressId})
    req.session.regenerate(function (err) {
    })

    res.redirect(`/course/order-complete/${order.id}`);
}

export const proceedOrder = async (req, res) => {

    req.session.billingStreet = req.body.billingStreet
    req.session.billingCity = req.body.billingCity
    req.session.billingPostal = req.body.billingPostal
    req.session.billingIc = req.body.billingIc
    req.session.billingDic = req.body.billingDic

    req.session.mailingStreet = req.body.mailingStreet
    req.session.mailingCity = req.body.mailingCity
    req.session.mailingPostal = req.body.mailingPostal

    req.session.email = req.body.email
    req.session.phone = req.body.phone

    req.session.note = req.body.note

    req.session.courseId = req.params.id;

    res.redirect(`/course/order-summary`);
}

export const orderCompleteView = async (req, res) => {

    const orderId = req.params.id;

    res.render("front/orderComplete", {
        title: 'Kurz',
        marked: 'courses',
        orderId,
        logoName
    });
}



