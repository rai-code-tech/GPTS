ALTER TABLE "gpts" ADD COLUMN "longdescription" varchar(1000) DEFAULT '';--> statement-breakpoint
ALTER TABLE "gpts" DROP COLUMN IF EXISTS "longDescription";--> statement-breakpoint
ALTER TABLE "gpts" DROP COLUMN IF EXISTS "url";