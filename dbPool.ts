import { Pool } from "pg";
import { config } from "dotenv";

config();

const portString: string | undefined = process.env.DB_PORT;
const port: number = portString ? parseInt(portString, 10) : 5432;

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: port,
});

export default pool;
