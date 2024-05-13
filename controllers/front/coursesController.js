import {getCourseById, getCoursesByCategoryId} from "../../src/db/courses.js";
import {createOrder} from "../../src/db/orders.js";
import jsonDb from "../../src/jsonDb.js";
import {getAllCourseCategories, getCategoryById, getCourseCategoriesOfType} from "../../src/db/courseCategories.js";
import {createAddress} from "../../src/db/addresses.js";
import {jsonDbSchema} from "../../src/jsonDbSchema.js";
import {getAllCourseTypes, geTypeByTitle} from "../../src/db/courseTypes.js";
import {getAllOffers} from "../../src/db/offers.js";
import {formatDate} from "../../src/utils/formatDate.js";

const logoName = await jsonDb.get(jsonDbSchema.logo)

export const coursesView = async (req, res) => {

    const {filter} = req.query;

    let categories
    if (filter) {
        const type = await geTypeByTitle(filter)
        categories = await getCourseCategoriesOfType(type.id)
    } else {
        categories = await getAllCourseCategories()
    }

    const coursesContent = await jsonDb.get(jsonDbSchema.courses)
    const types = await getAllCourseTypes()

    const offers = await getAllOffers()

    for (const offer of offers) {
        offer.formatedStartDate =  await formatDate(offer.startDate, 'D. M.')
        offer.formatedEndDate =  await formatDate(offer.endDate, 'D. M. YYYY')
    }

    res.render("front/courses", {
        title: 'Kurzy',
        marked: 'courses',
        categories,
        logoName,
        coursesContent,
        types,
        offers,
        filter
    });
}

export const categoryView = async (req, res) => {

    const categoryId = req.params.id;
    const category = await getCategoryById(categoryId)
    const courses = await getCoursesByCategoryId(categoryId);

    const offers = await getAllOffers()

    for (const offer of offers) {
        offer.formatedStartDate =  await formatDate(offer.startDate, 'D. M.')
        offer.formatedEndDate =  await formatDate(offer.endDate, 'D. M. YYYY')
    }

    res.render("front/category", {
        title: 'Kurzy',
        marked: 'courses',
        logoName,
        category,
        courses,
        offers
    });
}

export const orderSummaryView = async (req, res) => {

    const offers = await getAllOffers()

    for (const offer of offers) {
        offer.formatedStartDate =  await formatDate(offer.startDate, 'D. M.')
        offer.formatedEndDate =  await formatDate(offer.endDate, 'D. M. YYYY')
    }

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
    const courseId = req.session.courseId
    const course = await getCourseById(courseId)


    res.render("front/orderSummary", {
        title: 'Kurzy',
        marked: 'courses',
        summary: true,
        offers,
        logoName,
        course,
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

export const courseView = async (req, res) => {

    const courseId = req.params.id;

    const course = await getCourseById(courseId);

    const offers = await getAllOffers()

    for (const offer of offers) {
        offer.formatedStartDate =  await formatDate(offer.startDate, 'D. M.')
        offer.formatedEndDate =  await formatDate(offer.endDate, 'D. M. YYYY')
    }

    res.render("front/course", {
        title: 'Kurz',
        marked: 'courses',
        course,
        logoName,
        offers
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

    const offers = await getAllOffers()

    for (const offer of offers) {
        offer.formatedStartDate =  await formatDate(offer.startDate, 'D. M.')
        offer.formatedEndDate =  await formatDate(offer.endDate, 'D. M. YYYY')
    }

    res.render("front/order", {
        title: 'Kurz',
        marked: 'courses',
        summary: false,
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
        mailingPostal,
        offers
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



