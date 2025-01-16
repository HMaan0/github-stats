"use client";
import { useUsernames } from "@/Hooks/User";
import axios from "axios";
import React, { useEffect } from "react";

const Testing = () => {
  const users = ["Hmaan0", "Dnicholson1966", "brarkaran2004"];
  const username = useUsernames((state) => state.usernames);
  const setUsername = useUsernames((state) => state.setUsernames);

  useEffect(() => {
    async function main() {
      for (let i = 0; i < users.length; i++) {
        const res = await axios.get(`http://localhost:3002/${users[i]}`);
        const newUsername: string = res.data.data;
        setUsername(newUsername);
      }
    }
    main();
  }, []);

  return (
    <div>
      {username.map((name, index) => (
        <p key={index} className="text-5xl font-bold text-center">
          {name}
        </p>
      ))}
    </div>
  );
};

export default Testing;
