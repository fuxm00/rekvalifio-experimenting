import express from "express";
import {
    addOffer, adminExpiredOffersView, adminOffersView, adminOfferView, editOffer, removeOffer
} from "../../controllers/admin/adminOffersController.js";
import adminCourses from "./adminCourses.js";
import auth from "../../src/middlewares/auth.js";
import loadToastMessages from "../../src/middlewares/loadToastMessages.js";

const adminOffers = express.Router()

adminOffers.get("/admin/offers", auth, loadToastMessages, adminOffersView)
adminOffers.get("/admin/expired-offers", auth, loadToastMessages, adminExpiredOffersView)
adminOffers.get("/admin/offers/:id", auth, loadToastMessages, adminOfferView)
adminOffers.post("/admin/offers/add-offer", auth, addOffer)
adminOffers.post("/admin/offers/edit-offer/:id", auth, editOffer)
adminCourses.get("/admin/offers/remove-offer/:id", auth, loadToastMessages, removeOffer)

export default adminOffers