import {createOffer, getAllOffers, getOfferById, updateOffer} from "../../src/db/offers.js";
import {getAllCourseCategories, getCategoryById} from "../../src/db/courseCategories.js";
import {formatDate} from "../../src/utils/formatDate.js";
import {getFormatedOffersWithCategory} from "../../src/utils/offers.js";

export const adminOffersView = async (req, res) => {

    const offers = await getFormatedOffersWithCategory()
    const categories = await getAllCourseCategories();
    const minDate = await formatDate(new Date(), 'YYYY-MM-DD')

    res.render("admin/offers", {
        title: 'Nabídky', offers, offer: null, categories, minDate
    });
}

export const adminOfferView = async (req, res) => {

    const offerId = req.params.id
    const offer = await getOfferById(offerId)
    const offers = await getFormatedOffersWithCategory()
    const categories = await getAllCourseCategories();
    const minDate = await formatDate(new Date(), 'YYYY-MM-DD')

    res.render("admin/offers", {
        title: 'Nabídky', offers, offer, categories, minDate
    });
}

export const addOffer = async (req, res) => {

    const {title, offerStart: startDate, offerEnd: endDate, category: categoryId} = req.body

    await createOffer({title, startDate, endDate, categoryId})

    res.redirect('back')
}

export const editOffer = async (req, res) => {

    const {title, offerStart: startDate, offerEnd: endDate, category: categoryId} = req.body
    const {id: offerId} = req.params;

    await updateOffer({title, startDate, endDate, categoryId}, offerId)

    res.redirect('/admin/offers')
}