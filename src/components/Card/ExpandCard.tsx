import OptionsButton from "./OptionsButton";
import Repo from "./Repo";

const ExpandCard = () => {
  return (
    <>
      <OptionsButton options={["Repository", "Issues", "Pull Requests"]} />
      <div className="">
        <Repo />
      </div>
    </>
  );
};

export default ExpandCard;
