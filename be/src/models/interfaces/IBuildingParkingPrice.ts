import { EParkingType } from "../enums";

export interface IBuildingParkingPrice {
  id: number;
  buildingId: number;
  parkingType: EParkingType;
  price: number;
}
