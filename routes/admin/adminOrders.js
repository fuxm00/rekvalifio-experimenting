import express from "express";
import auth from "../../src/middlewares/auth.js";
import {
    adminOrdersArchive,
    adminOrdersArchiveView, adminOrdersComplete,
    adminOrdersUnArchive, adminOrdersUnComplete,
    adminOrdersView, adminOrderView, deleteOrder
} from "../../controllers/admin/adminOrdersController.js";
import loadToastMessages from "../../src/middlewares/loadToastMessages.js";

const orders = express.Router()

orders.get("/admin/orders", auth, loadToastMessages, adminOrdersView)
orders.get("/admin/orders/archive", auth, loadToastMessages, adminOrdersArchiveView)
orders.get("/admin/orders/archiveOrder/:id", auth, loadToastMessages, adminOrdersArchive)
orders.get("/admin/orders/unArchiveOrder/:id", auth, loadToastMessages, adminOrdersUnArchive)
orders.get("/admin/orders/:id", auth, loadToastMessages, adminOrderView)
orders.get("/admin/orders/completeOrder/:id", auth, loadToastMessages, adminOrdersComplete)
orders.get("/admin/orders/unCompleteOrder/:id", auth, loadToastMessages, adminOrdersUnComplete)
orders.get("/admin/orders/delete/:id", auth, loadToastMessages, deleteOrder)

export default orders