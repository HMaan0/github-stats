import Card from "@/components/Card/Card";
import Header from "@/components/Header";
import LoginDialog from "@/components/Login/LoginDialog";
import Navbar from "@/components/Navbar";
import React from "react";

export default function Home() {
  return (
    <main className="xl:mx-40 md:mx-[90px] md:my-[24px] m-4 flex flex-col gap-10">
      <LoginDialog />
      <Navbar />
      <Header />
      <section className="flex flex-col gap-10 md:px-14 xl:px-36">
        <Card />
      </section>
    </main>
  );
}
