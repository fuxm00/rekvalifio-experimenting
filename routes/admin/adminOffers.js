import express from "express";
import {
    addOffer, adminExpiredOffersView, adminOffersView, adminOfferView, editOffer, removeOffer
} from "../../controllers/admin/adminOffersController.js";
import adminCourses from "./adminCourses.js";
import auth from "../../src/middlewares/loggedIn.js";
import loadToastMessages from "../../src/middlewares/loadToastMessages.js";
import loadUser from "../../src/middlewares/loadUser.js";
import approveRights from "../../src/middlewares/approved.js";

const adminOffers = express.Router()

adminOffers.get("/admin/offers", loadUser, auth, approveRights, loadToastMessages, adminOffersView)
adminOffers.get("/admin/expired-offers", loadUser, auth, approveRights, loadToastMessages, adminExpiredOffersView)
adminOffers.get("/admin/offers/:id", loadUser, auth, approveRights, loadToastMessages, adminOfferView)
adminOffers.post("/admin/offers/add-offer", loadUser, auth, approveRights, addOffer)
adminOffers.post("/admin/offers/edit-offer/:id", loadUser, auth, approveRights, editOffer)
adminCourses.get("/admin/offers/remove-offer/:id", loadUser, auth, approveRights, loadToastMessages, removeOffer)

export default adminOffers