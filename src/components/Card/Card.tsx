import React from "react";
import Image from "next/image";
import GithubGraph from "./GithubGraph";
import ExpandCard from "./ExpandCard";
import PlusButton from "../PlusButton";

const Card = () => {
  const users = ["HMaan0", "Dnicholson1966", "brarkaran2004"];

  return (
    <>
      {users.map((user, index) => (
        <div
          key={index}
          className="p-5 flex flex-col gap-3 bg-light-card dark:bg-transparent shadow-lg dark:shadow-inner-custom rounded-xl w-full hover:-translate-y-0.5 transition-transform duration-300"
        >
          <div className="items-center  gap-3  w-full flex justify-between ">
            <div className="flex items-center w-32  h-max justify-center  ">
              <Image
                src={"https://avatars.githubusercontent.com/u/8079861?v=4"}
                width={"85"}
                height={"85"}
                alt="gitHub avatars"
                className="rounded-lg"
              />
            </div>
            <GithubGraph user={user} />
            <PlusButton user={user} />
          </div>
          <ExpandCard user={user} />
        </div>
      ))}
    </>
  );
};
export default Card;

// import React from "react";
// import Testing from "../Testing";

// const Card = () => {
//
//   return (
//     <>
//

//       <Testing />
//     })}

//     </>
//   );
// };

// export default Card;
