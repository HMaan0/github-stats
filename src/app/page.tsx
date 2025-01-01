import Card from "@/components/Card/Card";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="mx-[95px] my-[25px] flex flex-col gap-14">
      <Navbar />
      <Header />
      <section className="flex flex-col gap-4 md:px-20">
        <Card />
      </section>
    </main>
  );
}
