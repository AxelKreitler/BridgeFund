import query from "../../../db";
import { IOccupationRepo } from "../../../models";

export const getOccupation = async ({
  buildingId,
}: {
  buildingId: number;
}): Promise<IOccupationRepo[]> => {
  const dbQueryValues = [buildingId];
  const dbQuery = `SELECT
	bfs.parking_type,
	CAST(SUM(bfs.spaces) AS UNSIGNED) AS total_spaces,
	COALESCE(bso.occupied_spaces, 0) AS occupied_spaces
  FROM
	building_floor_space bfs
	INNER JOIN building_floor bf ON bf.id = bfs.building_floor_id
	INNER JOIN building b ON b.id = bf.building_id
	LEFT JOIN (
	  SELECT
		bs.parking_type,
		COUNT(*) AS occupied_spaces
	  FROM
		building_spaces bs
	  WHERE
		bs.building_id = 1
		AND bs.ended_at IS NULL
	  GROUP BY
		bs.parking_type
	) bso ON bfs.parking_type = bso.parking_type
  WHERE
	b.id = ?
  GROUP BY
	bfs.parking_type;`;

  const rows = await query<IOccupationRepo[]>(dbQuery, dbQueryValues);

  return rows;
};
