import express from "express";

import { signup } from "../controllers/singUp.controller.js";
import { signin } from "../controllers/singUp.controller.js";
import { google } from "../controllers/singUp.controller.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/signin", signin);
router.post("/google", google);

export default router;
