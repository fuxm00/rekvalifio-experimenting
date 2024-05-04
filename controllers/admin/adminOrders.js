import {getAllCourses, removeCourseById} from "../../src/db/courses.js";
import {archiveOrderById, getAllArchivedOrders, getAllNonArchivedOrders, getAllOrders} from "../../src/db/orders.js";
import moment from "moment";
import {formatDate} from "../../src/utils/formatDate.js";

export const adminOrdersView = async (req, res) => {

    const orders = await getAllNonArchivedOrders();

    for (const order of orders) {
        order.formatedDate = await formatDate(order.created_at, 'D. M. YYYY')
    }

    res.render("admin/orders", {
        title: 'Objednávky',
        orders,
        archivedList: false
    } );
}

export const adminOrdersArchiveView = async (req, res) => {

    const orders = await getAllArchivedOrders();

    for (const order of orders) {
        order.formatedDate = await formatDate(order.created_at, 'D. M. YYYY')
    }

    res.render("admin/ordersArchive", {
        title: 'Archiv objednávek',
        orders,
        archivedList: true
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