import express from "express";
import userController from "../controllers/user.controller.js";


const userRoute = express.Router();
userRoute.get("/", userController);

export default userRoute;
