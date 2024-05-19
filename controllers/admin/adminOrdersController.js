import {
    archiveOrderById, completeOrderById, remvoeOrderById
} from "../../src/db/orders.js";
import {getCompleteOrder, getFormatedOrders} from "../../src/utils/orders.js";

export const adminOrdersView = async (req, res) => {

    const orders = await getFormatedOrders()

    res.render("admin/orders", {
        title: 'Objednávky', orders, archivedList: false, marked: "orders"
    });
}

export const adminOrdersArchiveView = async (req, res) => {

    const orders = await getFormatedOrders()

    res.render("admin/orders", {
        title: 'Archiv objednávek', orders, archivedList: true, marked: "archive"
    });
}

export const adminOrderView = async (req, res) => {

    const orderId = req.params.id;

    const order = await getCompleteOrder()

    res.render("admin/order", {
        title: 'Objednávka', order
    });
}

export const adminOrdersArchive = async (req, res) => {

    const orderId = req.params.id;

    await archiveOrderById(orderId, true);

    res.redirect('back')
}

export const adminOrdersUnArchive = async (req, res) => {

    const orderId = req.params.id;

    await archiveOrderById(orderId, false);

    res.redirect('back')
}

export const adminOrdersComplete = async (req, res) => {

    const orderId = req.params.id;

    await completeOrderById(orderId, true);

    res.redirect('back')
}

export const adminOrdersUnComplete = async (req, res) => {

    const orderId = req.params.id;

    await completeOrderById(orderId, false);

    res.redirect('back')
}

export const deleteOrder = async (req, res) => {

    const orderId = req.params.id;

    await remvoeOrderById(orderId)

    res.redirect('back')
}