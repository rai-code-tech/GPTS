CREATE TABLE IF NOT EXISTS "gpts" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar(100) NOT NULL,
	"description" varchar(2000) NOT NULL
);