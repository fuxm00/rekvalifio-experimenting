import jsonDb from "../../src/jsonDb.js";
import {jsonDbSchema} from "../../src/jsonDbSchema.js";
import {getAllOffers} from "../../src/db/offers.js";
import {formatDate} from "../../src/utils/formatDate.js";

export const contactsView = async (req, res) => {

    const logoName = await jsonDb.get(jsonDbSchema.logo)
    const contactsContent = await jsonDb.get(jsonDbSchema.contacts)

    const offers = await getAllOffers()

    for (const offer of offers) {
        offer.formatedStartDate =  await formatDate(offer.startDate, 'D. M.')
        offer.formatedEndDate =  await formatDate(offer.endDate, 'D. M. YYYY')
    }

    res.render("front/contacts", {
        title: 'Kontakty',
        marked: 'contacts',
        logoName,
        contactsContent,
        offers
    } );
}