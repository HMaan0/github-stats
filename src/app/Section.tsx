const Section = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <section className="flex flex-col  gap-10 md:px-14 xl:px-36">
        {children}
      </section>
    </>
  );
};

export default Section;
