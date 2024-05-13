import db from "../db.js";

export const getAllOffers = async () => {
    let query = db('offers').select('*')

    const offers = await query

    return offers
}

export const createOffer = async (data) => {
    await db('offers').insert(data)
}