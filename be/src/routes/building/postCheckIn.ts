import { Request, Response } from "express";
import { service } from "../../services";
import { handleError } from "../../utils";
import { EParkingType } from "../../models";

export const postCheckIn = async (req: Request, res: Response) => {
  try {
    const buildingId = parseInt(req.params.id);
    const parkingType: EParkingType = req.body.parkingType;
    const checkIn = await service.building.createCheckIn({
      buildingId,
      parkingType,
    });

    // we expose everything, but in a real world scenario we should only expose the session
    res.status(200).json(checkIn);
  } catch (error) {
    handleError(error, "post.check.in.error", res);
  }
};
