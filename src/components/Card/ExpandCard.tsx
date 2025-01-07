import OptionsButton from "./OptionsButton";
import Repo from "../Repo/Repo";
import PullRequest from "../Repo/PullRequest";
import CommitIcon from "../CommitIcon";
const ExpandCard = () => {
  return (
    <>
      <span className="border-b dark:border-border-theme border-border-theme-light mx-4 mt-3"></span>
      {/* <OptionsButton options={["Repository", "Pull Requests"]} /> */}
      <OptionsButton
        options={["Owned Repos", "Collaborated Repos", "Forked Repos"]}
      />
      <div className=" flex flex-col gap-10">
        {/* <Repo />
        <div className="flex flex-col gap-2">
          <PullRequest />
          <PullRequest />
          <PullRequest />
        </div>
      
        <span className="border-b dark:border-border-theme border-border-theme-light"></span> */}
        {/* {selectedRepo === "Owned Repos" && <Repo />}{" "}
        {selectedRepo === "Collaborated Repos" && <></>}{" "}
        {selectedRepo === "Forked Repos" && <></>} */}
        <Repo />
        {/* <div className="flex justify-between mx-10">
          <CommitIcon />
          <div>
            <OptionsButton options={["Merged", "Open", "Closed"]} />
            <OptionsButton options={["Top Prs", "Latest", "Oldest"]} />
          </div>
          <CommitIcon />
        </div>
        <div className="flex flex-col gap-2 ">
          <PullRequest />
        </div>
        <span className="last:hidden  border-b dark:border-border-theme border-border-theme-light"></span> */}
      </div>
    </>
  );
};

export default ExpandCard;
