import type { Config } from "drizzle-kit";
import { cwd } from "node:process";
import { loadEnvConfig } from "@next/env";

loadEnvConfig(cwd());

const connectionString = process.env.DB_URL as string;

export default {
  schema: "./db/schema.ts",
  out: "./db/migrations",
  verbose: true,
  dialect: "postgresql",
  dbCredentials: {
    url: connectionString,
  },
} satisfies Config;
