import { Router } from "express";
import { uploadUserDetail,getUserDetail } from "../controllers/user.controller.js";
const router =  Router();

router.route("/submit").post(uploadUserDetail)
router.route("/getAllData").get(getUserDetail)
router.route("/health").get(() => {
    res.status(200).send('OK');
})


export default router