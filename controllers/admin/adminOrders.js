import {getAllCourses} from "../../src/db/courses.js";
import {getAllArchivedOrders, getAllNonArchivedOrders, getAllOrders} from "../../src/db/orders.js";

export const adminOrdersView = async (req, res) => {

    const orders = await getAllNonArchivedOrders();

    res.render("admin/orders", {
        title: 'Objednávky',
        orders,
    } );
}

export const adminOrdersArchiveView = async (req, res) => {

    const orders = await getAllArchivedOrders();

    res.render("admin/ordersArchive", {
        title: 'Archiv objednávek',
        orders,
    } );
}