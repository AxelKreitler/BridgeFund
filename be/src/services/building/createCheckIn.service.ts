import { service } from "..";
import {
  CBadRequestError,
  CBuildingSpaceMapper,
  EParkingType,
  IBuildingSpace,
} from "../../models";
import { dbService } from "../db";

export const createCheckIn = async ({
  buildingId,
  parkingType,
}: {
  buildingId: number;
  parkingType: EParkingType;
}): Promise<IBuildingSpace> => {
  const currentOccupation = await service.building.getOccupation({
    id: buildingId,
  });
  const parkingOccupation = currentOccupation.find(
    (occ) => occ.parkingType === parkingType
  )!;
  if (parkingOccupation.occupiedSpaces >= parkingOccupation.totalSpaces) {
    throw new CBadRequestError("parking.is.not.available");
  }
  const buildingSpaces = await dbService.building.createCheckIn({
    buildingId,
    parkingType,
  });
  const buildingSpace = CBuildingSpaceMapper.toDomain(buildingSpaces[0]);
  return buildingSpace;
};
