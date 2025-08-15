import { Router } from "express";
import { uploadUserDetail,getUserDetail } from "../controllers/user.controller.js";
const router =  Router();

router.route("/submit").post(uploadUserDetail)
router.route("/getAllData").get(getUserDetail)


export default router