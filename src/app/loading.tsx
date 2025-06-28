import CardLoading from "@/components/Card/CardLoading";
import Header from "@/components/Header";
import LoginDialog from "@/components/Login/LoginDialog";
import Navbar from "@/components/Navbar";
import Section from "./Section";

export default function Loading() {
  return (
    <>
      <main className="xl:mx-40 md:mx-[90px] md:my-[24px] m-4 flex flex-col gap-10">
        <LoginDialog />
        <Navbar />
        <Header />
        <Section>
          <CardLoading />
          <CardLoading />
          <CardLoading />
          <CardLoading />
          <CardLoading />
        </Section>
      </main>
    </>
  );
}
