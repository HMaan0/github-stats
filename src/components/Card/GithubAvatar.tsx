// "use cache";
import React, { Suspense } from "react";
import Image from "next/image";
import axios from "axios";
//import { unstable_cacheLife as cacheLife } from "next/cache";
const GithubAvatar = async ({ user }: { user: string }) => {
  // cacheLife("hours");
  const res = await axios(`https://api.github.com/users/${user}`);
  const avatarUrl = res.data.avatar_url;
  return (
    <>
      <div className="flex items-center h-max justify-center  ">
        <Suspense fallback={<ImageLoading />}>
          <Image
            src={avatarUrl}
            width={"85"}
            height={"85"}
            alt="gitHub avatars"
            className="rounded-lg"
          />
        </Suspense>
      </div>
    </>
  );
};

function ImageLoading() {
  return (
    <div
      className="rounded-lg animate-pulse w-max h-max dark:bg-white/10 bg-black/10"
      style={{ width: "85px", height: "85px" }}
    ></div>
  );
}

export default GithubAvatar;
