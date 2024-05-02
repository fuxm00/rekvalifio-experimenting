import {getAllCourses} from "../../src/db/courses.js";

export const adminOrdersView = async (req, res) => {

    const orders = null

    res.render("admin/orders", {
        title: 'Objednávky',
        orders,
    } );

}