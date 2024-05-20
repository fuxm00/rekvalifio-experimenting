import express from "express";
import {
    addOffer, adminExpiredOffersView, adminOffersView, adminOfferView, editOffer, removeOffer
} from "../../controllers/admin/adminOffersController.js";
import adminCourses from "./adminCourses.js";

const adminOffers = express.Router()

adminOffers.get("/admin/offers", adminOffersView)
adminOffers.get("/admin/expired-offers", adminExpiredOffersView)
adminOffers.get("/admin/offers/:id", adminOfferView)
adminOffers.post("/admin/offers/add-offer", addOffer)
adminOffers.post("/admin/offers/edit-offer/:id", editOffer)
adminCourses.get("/admin/offers/remove-offer/:id", removeOffer)

export default adminOffers