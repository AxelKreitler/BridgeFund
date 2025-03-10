import { EParkingType } from "../enums";

export interface IOccupation {
  parkingType: EParkingType;
  totalSpaces: number;
  occupiedSpaces: number;
}
