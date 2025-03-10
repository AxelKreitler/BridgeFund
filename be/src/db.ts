import mysql from "mysql2/promise";
import * as dotenv from "dotenv";
dotenv.config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || "", 10),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

async function query<T>(sql: string, params?: any[]): Promise<T> {
  const connection = await pool.getConnection();
  try {
    const [results] = await connection.execute(sql, params);
    return results as T;
  } catch (error) {
    throw error;
  } finally {
    connection.release();
  }
}

export default query;
