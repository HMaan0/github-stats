const Score = ({ score }: { score: number }) => {
  return (
    <>
      {score && <span className="dark:text-white text-black m-1">{score}</span>}
    </>
  );
};

export default Score;
