import { EParkingType } from "../../enums";

export interface IBuildingSpaceRepo {
  id: number;
  building_id: number;
  session: string;
  parking_type: EParkingType;
  started_at: Date;
  ended_at: Date | null;
}
