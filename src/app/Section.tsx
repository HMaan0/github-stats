import Card from "@/components/Card/Card";
import { polling } from "@/lib/actions/postRedis";
import React from "react";

const Section = async () => {
  await polling();
  return (
    <>
      <section className="flex flex-col gap-10 md:px-14 xl:px-36">
        <Card />
      </section>
    </>
  );
};

export default Section;
