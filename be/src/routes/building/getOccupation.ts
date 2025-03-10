import { Request, Response } from "express";
import { service } from "../../services";
import { handleError } from "../../utils";

export const getOccupation = async (req: Request, res: Response) => {
  try {
    const buildingId = parseInt(req.params.id);
    const occupation = await service.building.getOccupation({ id: buildingId });

    res.status(200).json(occupation);
  } catch (error) {
    handleError(error, "get.occupation.error", res);
  }
};
