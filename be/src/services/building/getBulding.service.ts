import { service } from "..";
import { CNotFoundError, IBuilding } from "../../models";
import { dbService } from "../db";

export const getBuilding = async ({
  id,
}: {
  id: number;
}): Promise<IBuilding> => {
  const buildings = await dbService.building.getBuildingsById({ id });

  if (buildings.length !== 1) {
    throw new CNotFoundError("building.not.found");
  }

  return buildings[0];
};
