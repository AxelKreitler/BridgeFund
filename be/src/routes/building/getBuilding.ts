import { Request, Response } from "express";
import { service } from "../../services";
import { handleError } from "../../utils";

export const getBuilding = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const building = await service.building.getBuilding({ id });

    res.status(200).json(building);
  } catch (error) {
    handleError(error, "get.building.error", res);
  }
};
