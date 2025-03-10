import query from "../../../db";
import { IBuildingRepo } from "../../../models";

export const getBuildingsById = async ({
  id,
}: {
  id: number;
}): Promise<IBuildingRepo[]> => {
  const dbQueryValues = [id];
  const dbQuery = `SELECT * FROM building b where b.id = ?;`;

  const rows = await query<IBuildingRepo[]>(dbQuery, dbQueryValues);

  return rows;
};
