import express from "express";
import { getBuilding } from "./getBuilding";
import { getOccupation } from "./getOccupation";
import { postCheckIn } from "./postCheckIn";
import { postCheckOut } from "./postCheckOut";

const router = express.Router();

router.get("/building/:id", getBuilding);
router.get("/building/:id/occupation", getOccupation);
router.post("/building/:id/checkin", postCheckIn);
router.post("/building/:id/checkout", postCheckOut);

export default router;
