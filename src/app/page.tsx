import Header from "@/components/Header";
import LoginDialog from "@/components/LoginDialog";
import Navbar from "@/components/Navbar";
import Section from "@/components/Section";
import React from "react";

export default function Home() {
  return (
    <main className="xl:mx-40 md:mx-[90px] md:my-[24px] m-4 flex flex-col gap-10">
      <LoginDialog />
      <Navbar />
      <Header />
      <Section />
    </main>
  );
}
