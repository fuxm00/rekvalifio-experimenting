import {getAllCourses} from "../../src/db/courses.js";

export const adminOrdersView = async (req, res) => {

    const orders = null

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