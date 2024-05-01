import {contactsView} from "../../controllers/front/contactsController.js";
import express from "express";
import {homeView} from "../../controllers/front/homeController.js";

const home = express.Router()

home.get("/", homeView);

export default home