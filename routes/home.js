import {contactsView} from "../controllers/contactsController.js";
import express from "express";
import {homeView} from "../controllers/homeController.js";

const home = express.Router()

home.get("/", homeView);

export default home