import express from "express";
import {
    adminUserLogin,
    adminUserLoginView,
    adminUserLogOut,
    adminUserRegister,
    adminUserRegisterView,
    adminUsersView,
    approveUser, deleteUser, restrictUser, waitView
} from "../../controllers/admin/adminUsersController.js";
import auth from "../../src/middlewares/loggedIn.js";
import loadToastMessages from "../../src/middlewares/loadToastMessages.js";
import loadUser from "../../src/middlewares/loadUser.js";
import approveRights from "../../src/middlewares/approved.js";

const adminUsers = express.Router()

adminUsers.get("/admin/users", loadUser, auth, approveRights, loadToastMessages, adminUsersView)

adminUsers.get("/admin/login", loadUser, loadToastMessages, adminUserLoginView)
adminUsers.post("/admin/login", adminUserLogin)

adminUsers.get("/admin/register", loadUser, loadToastMessages, adminUserRegisterView)
adminUsers.post("/admin/register", adminUserRegister)

adminUsers.get("/admin/logout", loadUser, auth, loadToastMessages, adminUserLogOut)

adminUsers.get("/admin/users/approve/:id", loadUser, auth, approveRights,loadToastMessages, approveUser)
adminUsers.get("/admin/users/restrict/:id", loadUser, auth, approveRights,loadToastMessages, restrictUser)
adminUsers.get("/admin/users/remove/:id", loadUser, auth, approveRights,loadToastMessages, deleteUser)

adminUsers.get("/admin/wait", loadUser, auth, loadToastMessages, waitView)




export default adminUsers