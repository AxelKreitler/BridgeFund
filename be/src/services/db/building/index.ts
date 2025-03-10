import { createCheckIn } from "./createCheckIn.db";
import { createCheckOut } from "./createCheckOut.db";
import { getBuildingsById } from "./getBuildingsById.db";
import { getBuildingsParkingPrice } from "./getBuildingsParkingPrice.db";
import { getOccupation } from "./getOccupation.db";

export const building = {
  getBuildingsById,
  getOccupation,
  createCheckIn,
  createCheckOut,
  getBuildingsParkingPrice,
};
