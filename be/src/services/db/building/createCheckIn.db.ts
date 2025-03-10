import query from "../../../db";
import { EParkingType, IBuildingSpaceRepo } from "../../../models";

export const createCheckIn = async ({
  buildingId,
  parkingType,
}: {
  buildingId: number;
  parkingType: EParkingType;
}): Promise<IBuildingSpaceRepo[]> => {
  const dbQueryInsertValues = [buildingId, parkingType];
  const dbQueryInsert = `INSERT INTO
	building_spaces (building_id, parking_type)
  VALUES
	(?, ?);`;

  const insertedRow = await query<{ insertId: number }>(
    dbQueryInsert,
    dbQueryInsertValues
  );
  const buildingSpaceId = insertedRow.insertId;

  const dbQuerySelectValues = [buildingId, buildingSpaceId];
  const dbQuerySelect = `SELECT
	*
  FROM
	building_spaces bs
  WHERE
	bs.building_id = ?
	AND bs.id = ?;`;

  const rows = await query<IBuildingSpaceRepo[]>(
    dbQuerySelect,
    dbQuerySelectValues
  );

  return rows;
};
