import { EParkingType } from "../../enums";

export interface IBuildingParkingPriceRepo {
  id: number;
  building_id: number;
  parking_type: EParkingType;
  price: number;
}
