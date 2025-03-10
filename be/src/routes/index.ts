import express from "express";
import buildingRoutes from "./building";

const router = express.Router();

router.use("/", buildingRoutes);

export default router;
