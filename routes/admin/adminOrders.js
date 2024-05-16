import express from "express";
import {adminLoginView} from "../../controllers/admin/adminController.js";
import auth from "../../src/middlewares/auth.js";
import {
    adminOrdersArchive,
    adminOrdersArchiveView, adminOrdersComplete,
    adminOrdersUnArchive, adminOrdersUnComplete,
    adminOrdersView, adminOrderView, deleteOrder
} from "../../controllers/admin/adminOrdersController.js";

const orders = express.Router()

orders.get("/admin/orders", auth, adminOrdersView)
orders.get("/admin/orders/archive", auth, adminOrdersArchiveView)
orders.get("/admin/orders/archiveOrder/:id", auth, adminOrdersArchive)
orders.get("/admin/orders/unArchiveOrder/:id", auth, adminOrdersUnArchive)
orders.get("/admin/orders/:id", auth, adminOrderView)
orders.get("/admin/orders/completeOrder/:id", auth, adminOrdersComplete)
orders.get("/admin/orders/unCompleteOrder/:id", auth, adminOrdersUnComplete)
orders.get("/admin/orders/delete/:id", auth, deleteOrder)

export default orders