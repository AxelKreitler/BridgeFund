import { IOccupation, IOccupationRepo } from "../../interfaces";

export class COcuppationMapper {
  static toDomain(occupationRepo: IOccupationRepo): IOccupation {
    return {
      parkingType: occupationRepo.parking_type,
      occupiedSpaces: occupationRepo.occupied_spaces,
      totalSpaces: occupationRepo.total_spaces,
    };
  }
}
