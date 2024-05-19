import {getCourseById, getCoursesByCategoryId} from "../../src/db/courses.js";
import {createOrder} from "../../src/db/orders.js";
import jsonDb from "../../src/jsonDb.js";
import {getAllCourseCategories, getCategoryById, getCourseCategoriesOfType} from "../../src/db/courseCategories.js";
import {createAddress} from "../../src/db/addresses.js";
import {jsonDbSchema} from "../../src/jsonDbSchema.js";
import {getAllCourseTypes, geTypeByTitle} from "../../src/db/courseTypes.js";
import {createParticipant} from "../../src/db/participants.js";
import {getFrontHeaderLinks} from "../../src/utils/frontHeaderLinks.js";
import {getFormatedOffers} from "../../src/utils/offers.js";

export const coursesView = async (req, res) => {

    const {filter} = req.query;

    const headerLinks = await getFrontHeaderLinks()

    let categories
    if (filter) {
        const type = await geTypeByTitle(filter)
        categories = await getCourseCategoriesOfType(type.id)
    } else {
        categories = await getAllCourseCategories()
    }

    const coursesContent = await jsonDb.get(jsonDbSchema.courses)
    const types = await getAllCourseTypes()
    const offers = await getFormatedOffers()

    res.render("front/courses", {
        title: 'Kurzy', marked: 'courses', categories, headerLinks, coursesContent, types, offers, filter
    });
}

export const categoryView = async (req, res) => {

    const categoryId = req.params.id;
    const category = await getCategoryById(categoryId)
    const courses = await getCoursesByCategoryId(categoryId);
    const headerLinks = await getFrontHeaderLinks()
    const offers = await getFormatedOffers()

    res.render("front/category", {
        title: 'Kurzy', marked: 'courses', headerLinks, category, courses, offers
    });
}

export const orderSummaryView = async (req, res) => {

    const {
        note,
        email,
        phone,
        billingFirm,
        billingName,
        billingStreet,
        billingCity,
        billingPostal,
        mailingFirm,
        mailingName,
        billingIc,
        billingDic,
        mailingStreet,
        mailingCity,
        mailingPostal,
        participants,
        finalPrice
    } = req.session;

    const courseId = req.session.courseId
    let course

    if (courseId) {
        course = await getCourseById(courseId)
    } else {
        res.redirect('/')
    }

    const headerLinks = await getFrontHeaderLinks()
    const offers = await getFormatedOffers()

    res.render("front/orderSummary", {
        title: 'Kurzy',
        marked: 'courses',
        summary: true,
        offers,
        headerLinks,
        course,
        note,
        email,
        phone,
        billingFirm,
        billingName,
        billingStreet,
        billingCity,
        billingPostal,
        mailingFirm,
        mailingName,
        billingIc,
        billingDic,
        mailingStreet,
        mailingCity,
        mailingPostal,
        participants,
        finalPrice
    });
}

export const courseView = async (req, res) => {

    const courseId = req.params.id;
    const course = await getCourseById(courseId);
    const headerLinks = await getFrontHeaderLinks()
    const offers = await getFormatedOffers()

    res.render("front/course", {
        title: 'Kurz', marked: 'courses', course, headerLinks, offers
    });
}

export const courseOrderView = async (req, res) => {

    const {id: courseId} = req.params;
    const {
        note,
        email,
        phone,
        billingFirm,
        billingName,
        billingStreet,
        billingCity,
        billingPostal,
        mailingFirm,
        mailingName,
        billingIc,
        billingDic,
        mailingStreet,
        mailingCity,
        mailingPostal,
        finalPrice,
        participants
    } = req.session;

    const course = await getCourseById(courseId);
    const headerLinks = await getFrontHeaderLinks()
    const offers = await getFormatedOffers()

    res.render("front/order", {
        title: 'Kurz',
        marked: 'courses',
        summary: false,
        course,
        headerLinks,
        note,
        email,
        phone,
        billingFirm,
        billingName,
        billingStreet,
        billingCity,
        billingPostal,
        mailingFirm,
        mailingName,
        billingIc,
        billingDic,
        mailingStreet,
        mailingCity,
        mailingPostal,
        offers,
        participants,
        finalPrice
    });
}

export const placeOrder = async (req, res) => {

    const {id: courseId} = req.params;
    const {
        note,
        email,
        phone,
        billingFirm,
        billingName,
        billingStreet,
        billingCity,
        billingPostal,
        mailingFirm,
        mailingName,
        billingIc,
        billingDic,
        mailingStreet,
        mailingCity,
        mailingPostal,
        participants,
        finalPrice
    } = req.session;

    const billingAddress = await createAddress({
        firm: billingFirm,
        name: billingName,
        street: billingStreet,
        city: billingCity,
        postal: billingPostal,
        ic: billingIc,
        dic: billingDic
    })

    const mailingAddress = await createAddress({
        firm: mailingFirm, name: mailingName, street: mailingStreet, city: mailingCity, postal: mailingPostal,
    })

    const billingAddressId = billingAddress.id;
    const mailingAddressId = mailingAddress.id;

    const order = await createOrder({courseId, note, email, phone, billingAddressId, mailingAddressId,price: finalPrice})
    req.session.regenerate(function (err) {
    })

    for (const participant of participants) {
        const name = participant.name
        const orderId = order.id
        await createParticipant({name, orderId})
    }

    res.redirect(`/course/order-complete/${order.id}`);
}

export const proceedOrder = async (req, res) => {

    let participants = []
    for (const key in req.body) {
        if (key.startsWith('participant')) {
            let participant = {name: req.body[key]};
            participants.push(participant)
        }
    }
    req.session.participants = participants

    req.session.billingFirm = req.body.billingFirm
    req.session.billingName = req.body.billingName
    req.session.billingStreet = req.body.billingStreet
    req.session.billingCity = req.body.billingCity
    req.session.billingPostal = req.body.billingPostal
    req.session.billingIc = req.body.billingIc
    req.session.billingDic = req.body.billingDic

    req.session.mailingFirm = req.body.mailingFirm
    req.session.mailingName = req.body.mailingName
    req.session.mailingStreet = req.body.mailingStreet
    req.session.mailingCity = req.body.mailingCity
    req.session.mailingPostal = req.body.mailingPostal

    req.session.email = req.body.email
    req.session.phone = req.body.phone
    req.session.note = req.body.note

    req.session.courseId = req.params.id;

    const course = await getCourseById(req.params.id)
    req.session.finalPrice = participants.length * course.price

        res.redirect(`/course/order-summary`);
}

export const orderCompleteView = async (req, res) => {
    const headerLinks = await getFrontHeaderLinks()
    const orderId = req.params.id;
    const offers = await getFormatedOffers()

    res.render("front/orderComplete", {
        title: 'Kurz', marked: 'courses', orderId, headerLinks, offers
    });
}



