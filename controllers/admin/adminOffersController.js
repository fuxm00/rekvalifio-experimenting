import {createOffer, getAllOffers} from "../../src/db/offers.js";
import {getAllCourseCategories} from "../../src/db/courseCategories.js";
import {formatDate} from "../../src/utils/formatDate.js";
import {createCourseType} from "../../src/db/courseTypes.js";

export const adminOffersView = async (req, res) => {

    const offers = await getAllOffers();
    for (const offer of offers) {
        offer.formatedStartDate =  await formatDate(offer.startDate, 'D. M.')
        offer.formatedEndDate =  await formatDate(offer.endDate, 'D. M. YYYY')
    }
    const categories = await getAllCourseCategories();
    const minDate = await formatDate(new Date(), 'YYYY-MM-DD')

    res.render("admin/offers", {
        title: 'Nabídky',
        offers,
        offer: null,
        categories,
        minDate
    } );
}

export const addOffer = async (req, res) => {

    const {title, offerStart: startDate, offerEnd: endDate, category: categoryId} = req.body

    await createOffer({title, startDate, endDate, categoryId})

    res.redirect('back')
}