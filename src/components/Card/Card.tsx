import ExpandCard from "./ExpandCard";
import PlusButton from "../PlusButton";
import Line from "../Line";

const Card = ({
  children,
  index,
  user,
  avatarComponent,
}: {
  children: React.ReactNode;
  index: number;
  user: string;
  avatarComponent: React.ReactNode;
}) => {
  return (
    <>
      <div className="p-5 flex flex-col gap-5 bg-light-card dark:bg-transparent shadow-lg dark:shadow-inner-custom rounded-xl w-full  transition-transform duration-300">
        <div className="items-center w-full flex ">
          <div className="w-full flex gap-3">
            {avatarComponent}
            <div className="flex flex-col justify-between py-2">
              <p className="font-semibold text-md md:text-xl">{user}</p>

              <p className=" dark:text-white/50 text-black/50 text-sm flex  items-center gap-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full dark:bg-primary bg-light-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 dark:bg-primary bg-light-primary"></span>
                </span>
                Last fetched
                <span className="dark:text-white text-black mr-1">2hr</span>
              </p>
            </div>
          </div>
          <div className="w-min flex justify-center items-center">
            <p
              className={`text-7xl  font-extrabold font-mono bg-gradient-to-b  bg-clip-text text-transparent ${
                index === 0 && "from-amber-200 to-yellow-500"
              }
              ${index === 1 && " from-slate-300 to-slate-500"}
              ${index === 2 && "from-[#db6c2b] to-[#673208]"}
              ${
                index > 2 &&
                "dark:from-primary dark:to-accent from-light-accent to-light-primary "
              }
              `}
            >
              {index + 1}
            </p>
          </div>
        </div>
        <Line />
        {children}
        <PlusButton user={user} />
        <ExpandCard user={user} />
      </div>
    </>
  );
};
export default Card;
