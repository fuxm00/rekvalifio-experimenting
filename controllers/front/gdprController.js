import jsonDb from "../../src/jsonDb.js";
import {jsonDbSchema} from "../../src/jsonDbSchema.js";
import {getAllOffers} from "../../src/db/offers.js";
import {formatDate} from "../../src/utils/formatDate.js";

const offers = await getAllOffers()

for (const offer of offers) {
    offer.formatedStartDate = await formatDate(offer.startDate, 'D. M.')
    offer.formatedEndDate = await formatDate(offer.endDate, 'D. M. YYYY')
}

export const gdprView = async (req, res) => {

    const logoName = await jsonDb.get(jsonDbSchema.logo)
    const gdprContent = await jsonDb.get(jsonDbSchema.gdpr)

    res.render("front/gdpr", {
        title: 'Ochrana osobních údajů',
        marked: null,
        logoName,
        content: gdprContent,
        offers
    } );
}