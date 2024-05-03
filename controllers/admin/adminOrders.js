import {getAllCourses} from "../../src/db/courses.js";
import {getAllOrders} from "../../src/db/orders.js";

export const adminOrdersView = async (req, res) => {

    const orders = await getAllOrders();

    res.render("admin/orders", {
        title: 'Objednávky',
        orders,
    } );
}

export const adminOrdersArchiveView = async (req, res) => {

    const orders = null

    res.render("admin/ordersArchive", {
        title: 'Archiv objednávek',
        orders,
    } );
}