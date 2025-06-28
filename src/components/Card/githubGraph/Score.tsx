const Score = ({ score }: { score: number | null }) => {
  return (
    <>
      <span className="dark:text-white text-black m-1">
        {score ? score : 0}
      </span>
    </>
  );
};

export default Score;
