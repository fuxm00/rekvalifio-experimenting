import jsonDb from "../../src/jsonDb.js";
import {jsonDbSchema} from "../../src/jsonDbSchema.js";
import {getAllOffers} from "../../src/db/offers.js";
import {formatDate} from "../../src/utils/formatDate.js";

const offers = await getAllOffers()

for (const offer of offers) {
    offer.formatedStartDate =  await formatDate(offer.startDate, 'D. M.')
    offer.formatedEndDate =  await formatDate(offer.endDate, 'D. M. YYYY')
}

export const homeView = async (req, res) => {

    const logoName = await jsonDb.get(jsonDbSchema.logo)
    const homeContent = await jsonDb.get(jsonDbSchema.home)

    res.render("front/home", {
        title: 'Domů',
        marked: 'home',
        logoName,
        homeContent,
        offers
    } );
}