import query from "../../../db";
import { EParkingType, IBuildingParkingPriceRepo } from "../../../models";

export const getBuildingsParkingPrice = async ({
  buildingId,
  parkingType,
}: {
  buildingId: number;
  parkingType: EParkingType;
}): Promise<IBuildingParkingPriceRepo[]> => {
  const dbQueryValues = [buildingId, parkingType];
  const dbQuery = `SELECT
	  *
  FROM
	  building_parking_price bpp
  WHERE
	  bpp.building_id = ?
	  AND bpp.parking_type = ?`;

  const rows = await query<IBuildingParkingPriceRepo[]>(dbQuery, dbQueryValues);

  return rows;
};
