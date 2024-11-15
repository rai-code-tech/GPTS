import React from "react";
import { gpts } from "@/db/schema";
import { db } from "@/db/db";
import { eq } from "drizzle-orm";

interface Props {
  params: { slug: string };
}

const Page = async ({ params }: Props) => {
  const slug = params.slug;
  const result = await db.select().from(gpts).where(eq(gpts.id, slug));

  return (
    <div>
      <div>
        <h1 className="text-6xl font-bold text-white text-center mt-16">
          {result[0].name} 
        </h1>
      </div>

      <div className="flex flex-nowrap justify-center">
        <p className=" mt-8 mb-8 w-3/4">{result[0].longdescription}</p>
      </div>
      <div className="flex flex-nowrap justify-center">
        <a
          href="https://chatgpt.com/g/g-oJIoV1yxD-summarize"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white font-semibold py-3 px-5 rounded-lg"
        >
          Visit {result[0].name}
        </a>
      </div>
    </div>
  );
};

export default Page;
