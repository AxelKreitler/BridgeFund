import query from "../../../db";
import { CNotFoundError, IBuildingSpaceRepo } from "../../../models";

export const createCheckOut = async ({
  buildingId,
  session,
}: {
  buildingId: number;
  session: string;
}): Promise<IBuildingSpaceRepo[]> => {
  const dbQueryUpdateValues = [session];
  const dbQueryUpdate = `UPDATE building_spaces bs
  SET
	  bs.ended_at = NOW()
  WHERE
	  bs.session = ?
    AND bs.ended_at IS NULL;`;

  const updatedRow = await query<{ insertId: number; affectedRows: number }>(
    dbQueryUpdate,
    dbQueryUpdateValues
  );
  if (updatedRow.affectedRows === 0) {
    throw new CNotFoundError("session.not.found");
  }

  const dbQuerySelectValues = [buildingId, session];
  const dbQuerySelect = `SELECT
	  *
  FROM
	  building_spaces bs
  WHERE
	  bs.building_id = ?
	  AND bs.session = ?;`;

  const rows = await query<IBuildingSpaceRepo[]>(
    dbQuerySelect,
    dbQuerySelectValues
  );

  return rows;
};
