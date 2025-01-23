"use server";
import { APIResponse } from "@harshmaan/github_rank_backend_types";
import axios from "axios";
import { createClient } from "redis";
const client = createClient();
export async function postRedis(
  username: string
): Promise<{ data: APIResponse; time: string } | undefined> {
  try {
    await client.connect();
    const res = await axios.get(`http://localhost:3002/${username}`);
    const data: APIResponse = await res.data;
    const time = new Date().toISOString();
    await client.set(username, JSON.stringify(data));
    await client.set(`${username}:time`, time);
    return { data: data, time: time };
  } catch (error) {
    console.log(error);
  }
}

export async function getRedis(
  user: string
): Promise<{ data: APIResponse } | undefined> {
  try {
    await client.connect();
    const res = await client.get(user);
    const userGithub = res && JSON.parse(res);
    return { data: userGithub };
  } catch (error) {
    console.log(error);
  } finally {
    client.disconnect();
  }
}

export async function polling() {
  const BATCH_SIZE = 40;
  const INTERVAL = 60 * 60 * 1000;

  try {
    if (client.isOpen) {
      await client.connect();
    }
    while (true) {
      const usersArr = await prisma?.users.findMany({
        select: {
          user: true,
        },
      });

      if (usersArr && usersArr.length > 0) {
        const users = usersArr[0].user;
        const totalUsers = users.length;

        for (let start = 0; start < totalUsers; start += BATCH_SIZE) {
          const batch = users.slice(start, start + BATCH_SIZE);

          for (const user of batch) {
            try {
              const res = await axios(`http://localhost:3002/${user}`);
              const data: APIResponse = await res.data;
              const time = new Date().toISOString();
              await client.del(user);
              await client.del(`${user}:time`);
              await client.set(`${user}:time`, time);
              await client.set(user, JSON.stringify(data));
            } catch (error) {
              console.log(error);
            }
          }

          await new Promise((resolve) => setTimeout(resolve, INTERVAL));
        }
      }
    }
  } catch (error) {
    console.error("Error in polling:", error);
  } finally {
    if (client.isOpen) {
      await client.disconnect();
    }
  }
}
