import Card from "@/components/Card/Card";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="md:mx-[90px] md:my-[24px] m-4 flex flex-col gap-10">
      <Navbar />
      <Header />
      <section className="flex flex-col gap-4 md:px-14">
        <Card />
      </section>
    </main>
  );
}
