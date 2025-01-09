import OptionsButton from "./OptionsButton";
import Repo from "../Repo/Repo";
import Line from "../Line";
const ExpandCard = () => {
  return (
    <>
      <Line />
      {/* <OptionsButton options={["Repository", "Pull Requests"]} /> */}
      <OptionsButton
        options={["Owned Repos", "Collaborated Repos", "Forked Repos"]}
      />
      <div className="flex flex-col gap-10">
        <Repo />
      </div>
    </>
  );
};

export default ExpandCard;
