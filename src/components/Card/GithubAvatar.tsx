"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";

const GithubAvatar = ({ user }: { user: string }) => {
  const [avatarUrl, setAvatarUrl] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetch() {
      const res = await axios(`https://api.github.com/users/${user}`);
      const url = res.data.avatar_url;
      setAvatarUrl(url);
      setLoading(false);
    }
    fetch();
  }, [user]);

  return (
    <>
      <div className="flex items-center h-max justify-center  ">
        {loading ? (
          <ImageLoading />
        ) : (
          <Image
            src={avatarUrl}
            width={"85"}
            height={"85"}
            alt="gitHub avatars"
            className="rounded-lg"
          />
        )}
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
