import express from "express";
import usersController from "../controllers/usersController.js";

const usersRoute = express.Router();
usersRoute.post("/users", usersController);

export default usersRoute;
