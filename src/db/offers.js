import db from "../db.js";

export const getAllOffers = async () => {
    let query = db('offers').select('*')

    const offers = await query

    return offers
}

export const createOffer = async (data) => {
    await db('offers').insert(data)
}

export const getOfferById = async (offerId) => {
    let query = db('offers').select('*')
        .where('id', offerId)
        .first()

    const orders = await query

    return orders
}

export const updateOffer = async (data, offerId) => {
    await db('offers').update(data).where('Id', offerId)
}