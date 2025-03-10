import {
  IBuildingParkingPrice,
  IBuildingParkingPriceRepo,
} from "../../interfaces";

export class CBuildingParkingPriceMapper {
  static toDomain(
    buildingParkingPriceRepo: IBuildingParkingPriceRepo
  ): IBuildingParkingPrice {
    return {
      id: buildingParkingPriceRepo.id,
      buildingId: buildingParkingPriceRepo.building_id,
      parkingType: buildingParkingPriceRepo.parking_type,
      price: buildingParkingPriceRepo.price,
    };
  }
}
