import db from "../db.js";

export const getAllOrders = async () => {
    let query = db('orders').select('*')

    const orders = await query

    return orders
}

export const createOrder = async (data) => {
    await db('orders').insert(data)
}