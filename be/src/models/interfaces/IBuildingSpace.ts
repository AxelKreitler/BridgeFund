import { EParkingType } from "../enums";

export interface IBuildingSpace {
  id: number;
  buildingId: number;
  session: string;
  parkingType: EParkingType;
  startedAt: Date;
  endedAt: Date | null;
}
