import { service } from "..";
import { COcuppationMapper, IOccupation } from "../../models";
import { dbService } from "../db";

export const getOccupation = async ({
  id,
}: {
  id: number;
}): Promise<IOccupation[]> => {
  const building = await service.building.getBuilding({ id });
  const occupationRepo = await dbService.building.getOccupation({
    buildingId: building.id,
  });

  return occupationRepo.map(COcuppationMapper.toDomain);
};
