import React, { Suspense } from "react";
import Image from "next/image";
import ImageLoading from "../ImageLoading";

const GithubAvatar = async ({ user }: { user: string }) => {
  return (
    <>
      <div className="flex items-center h-max justify-center  ">
        <Suspense fallback={<ImageLoading />}>
          <Image
            src={`https://github.com/${user}.png`}
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

export default GithubAvatar;
