import { getCourseById } from "../../src/db/courses.js";
import {
    archiveOrderById, completeOrderById,
    getAllArchivedOrders,
    getAllNonArchivedOrders,
    getOrderById, remvoeOrderById
} from "../../src/db/orders.js";
import {formatDate} from "../../src/utils/formatDate.js";
import {getAddressById} from "../../src/db/addresses.js";

export const adminOrdersView = async (req, res) => {

    const orders = await getAllNonArchivedOrders();

    for (const order of orders) {
        order.formatedDate = await formatDate(order.created_at, 'D. M. YYYY')
    }

    res.render("admin/orders", {
        title: 'Objednávky',
        orders,
        archivedList: false,
        marked: "orders"
    } );
}

export const adminOrdersArchiveView = async (req, res) => {

    const orders = await getAllArchivedOrders();

    for (const order of orders) {
        order.formatedDate = await formatDate(order.created_at, 'D. M. YYYY')
    }

    res.render("admin/orders", {
        title: 'Archiv objednávek',
        orders,
        archivedList: true,
        marked: "archive"
    } );
}

export const adminOrderView = async (req, res) => {

    const orderId = req.params.id;

    const order = await getOrderById(orderId);
    order.formatedDate = await formatDate(order.created_at, 'D. M. YYYY')
    order.course = await getCourseById(order.courseId);
    order.billingAdress = await getAddressById(order.billingAddressId);
    order.mailingAddress = await getAddressById(order.mailingAddressId);

    res.render("admin/order", {
        title: 'Objednávka',
        order
    } );
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