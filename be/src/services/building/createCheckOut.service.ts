import {
  CBuildingParkingPriceMapper,
  CBuildingSpaceMapper,
  ICheckoutResponse,
} from "../../models";
import { getDifferenceInHours } from "../../utils";
import { dbService } from "../db";

export const createCheckOut = async ({
  buildingId,
  session,
}: {
  buildingId: number;
  session: string;
}): Promise<ICheckoutResponse> => {
  const buildingSpaces = await dbService.building.createCheckOut({
    buildingId,
    session,
  });
  const buildingSpace = CBuildingSpaceMapper.toDomain(buildingSpaces[0]);

  const hoursPassed = getDifferenceInHours(
    buildingSpace.startedAt,
    buildingSpace.endedAt!
  );

  const getBuildingParkingPriceRepo =
    await dbService.building.getBuildingsParkingPrice({
      buildingId: buildingSpace.buildingId,
      parkingType: buildingSpace.parkingType,
    });
  const buildingParkingPrice = CBuildingParkingPriceMapper.toDomain(
    getBuildingParkingPriceRepo[0]
  );
  const totalPrice = hoursPassed * buildingParkingPrice.price;

  return {
    session: buildingSpace.session,
    startedAt: buildingSpace.startedAt,
    endedAt: buildingSpace.endedAt!,
    total: totalPrice,
  };
};
