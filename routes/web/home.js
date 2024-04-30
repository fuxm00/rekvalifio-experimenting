import {contactsView} from "../../controllers/web/contactsController.js";
import express from "express";
import {homeView} from "../../controllers/web/homeController.js";

const home = express.Router()

home.get("/", homeView);

export default home