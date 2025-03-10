import { EParkingType } from "../../enums";

export interface IOccupationRepo {
  parking_type: EParkingType;
  total_spaces: number;
  occupied_spaces: number;
}
