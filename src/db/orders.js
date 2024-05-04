import db from "../db.js";

export const getAllOrders = async () => {
    let query = db('orders').select('*')

    const orders = await query

    return orders
}

export const getAllArchivedOrders = async () => {
    let query = db('orders').select('*').where('archived', true)

    const orders = await query

    return orders
}

export const getOrderById = async (id) => {
    let query = db('orders').select('*').where('id', id).first()

    const orders = await query

    return orders
}

export const getAllNonArchivedOrders = async () => {
    let query = db('orders').select('*').where('archived', false)

    const orders = await query

    return orders
}

export const createOrder = async (data) => {
    await db('orders').insert(data)
}

export const archiveOrderById = async (id, isArchived) => {
    await db('orders').update({archived: isArchived}).where('id', id)
}