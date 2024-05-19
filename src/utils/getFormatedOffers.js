import {getAllOffers} from "../db/offers.js";
import {formatDate} from "./formatDate.js";

export const getFormatedOffers = async () => {

    const offers = await getAllOffers()

    for (const offer of offers) {
        offer.formatedStartDate =  await formatDate(offer.startDate, 'D. M.')
        offer.formatedEndDate =  await formatDate(offer.endDate, 'D. M. YYYY')
    }
    return offers
}