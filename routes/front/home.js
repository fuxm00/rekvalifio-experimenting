import {contactsView} from "../../controllers/front/contactsController.js";
import express from "express";
import {homeView} from "../../controllers/front/homeController.js";
import auth from "../../src/middlewares/auth.js";

const home = express.Router()

home.get("/", homeView);

export default home