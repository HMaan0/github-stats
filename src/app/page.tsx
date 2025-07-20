import Header from "@/components/Header";
import LoginDialog from "@/components/Login/LoginDialog";
import Navbar from "@/components/Navbar";
import React from "react";
import Section from "./Section";
import Card from "@/components/Card/Card";

export const revalidate = 3600;

export default function Home() {
  return (
    <main className="xl:mx-40 md:mx-[90px] md:my-[24px] m-4 flex flex-col gap-10">
      <LoginDialog />
      <Navbar />
      <Header />
      <Section>
        <Card />
      </Section>
    </main>
  );
}
