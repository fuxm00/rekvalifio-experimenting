import express from "express";
import {adminLoginView} from "../../controllers/admin/adminController.js";
import auth from "../../src/middlewares/auth.js";
import {
    adminOrdersArchive,
    adminOrdersArchiveView,
    adminOrdersUnArchive,
    adminOrdersView, adminOrderView
} from "../../controllers/admin/adminOrders.js";

const orders = express.Router()

orders.get("/admin/orders", auth, adminOrdersView)
orders.get("/admin/orders/archive", auth, adminOrdersArchiveView)
orders.get("/admin/orders/archiveOrder/:id", auth, adminOrdersArchive)
orders.get("/admin/orders/unArchiveOrder/:id", auth, adminOrdersUnArchive)
orders.get("/admin/orders/:id", auth, adminOrderView)

export default orders