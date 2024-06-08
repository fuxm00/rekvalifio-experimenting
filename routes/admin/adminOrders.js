import express from "express";
import auth from "../../src/middlewares/loggedIn.js";
import {
    adminOrdersArchive,
    adminOrdersArchiveView, adminOrdersComplete,
    adminOrdersUnArchive, adminOrdersUnComplete,
    adminOrdersView, adminOrderView, deleteOrder
} from "../../controllers/admin/adminOrdersController.js";
import loadToastMessages from "../../src/middlewares/loadToastMessages.js";
import loadUser from "../../src/middlewares/loadUser.js";
import approveRights from "../../src/middlewares/Approved.js";

const orders = express.Router()

orders.get("/admin/orders", loadUser, auth, approveRights, loadToastMessages, adminOrdersView)
orders.get("/admin/orders/archive", loadUser, auth, approveRights, loadToastMessages, adminOrdersArchiveView)
orders.get("/admin/orders/archiveOrder/:id", loadUser, auth, approveRights, loadToastMessages, adminOrdersArchive)
orders.get("/admin/orders/unArchiveOrder/:id", loadUser, auth, approveRights, loadToastMessages, adminOrdersUnArchive)
orders.get("/admin/orders/:id", loadUser, auth, approveRights, loadToastMessages, adminOrderView)
orders.get("/admin/orders/completeOrder/:id", loadUser, auth, approveRights, loadToastMessages, adminOrdersComplete)
orders.get("/admin/orders/unCompleteOrder/:id", loadUser, auth, approveRights, loadToastMessages, adminOrdersUnComplete)
orders.get("/admin/orders/delete/:id", loadUser, auth, approveRights, loadToastMessages, deleteOrder)

export default orders