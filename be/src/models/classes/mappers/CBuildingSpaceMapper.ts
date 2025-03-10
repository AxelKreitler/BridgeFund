import { IBuildingSpace, IBuildingSpaceRepo } from "../../interfaces";

export class CBuildingSpaceMapper {
  static toDomain(buildingSpaceRepo: IBuildingSpaceRepo): IBuildingSpace {
    return {
      id: buildingSpaceRepo.id,
      buildingId: buildingSpaceRepo.building_id,
      session: buildingSpaceRepo.session,
      parkingType: buildingSpaceRepo.parking_type,
      startedAt: buildingSpaceRepo.started_at,
      endedAt: buildingSpaceRepo.ended_at,
    };
  }
}
