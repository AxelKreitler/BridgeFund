import { Request, Response } from "express";
import { service } from "../../services";
import { handleError } from "../../utils";

export const postCheckOut = async (req: Request, res: Response) => {
  try {
    const buildingId = parseInt(req.params.id);
    const session: string = req.body.session;
    const checkOut = await service.building.createCheckOut({
      buildingId,
      session,
    });

    res.status(200).json(checkOut);
  } catch (error) {
    handleError(error, "post.check.out.error", res);
  }
};
