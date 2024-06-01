import { drizzle } from "drizzle-orm/node-postgres";
import { migrate } from "drizzle-orm/node-postgres/migrator";
import { Pool } from "pg";

const pool = new Pool({
  connectionString: `${process.env.DB_URL}`,
  max: 1,
});

migrate(drizzle(pool), { migrationsFolder: "@/db/migrations" });
