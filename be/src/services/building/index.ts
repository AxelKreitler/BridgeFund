import { createCheckIn } from "./createCheckIn.service";
import { createCheckOut } from "./createCheckOut.service";
import { getBuilding } from "./getBulding.service";
import { getOccupation } from "./getOccupation.service";

export const building = {
  getBuilding,
  getOccupation,
  createCheckIn,
  createCheckOut,
};
