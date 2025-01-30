"use server";
import { createClient } from "redis";

const client = createClient({
  socket: {
    host: process.env.REDIS_HOST || "localhost",
    port: Number(process.env.REDIS_PORT) || 6379,
  },
});
export async function getTimeOfUser(user: string) {
  try {
    if (!client.isOpen) {
      await client.connect();
    }

    const time = await client.get(`${user}:time`);

    return time;
  } catch (error) {
    console.log(error);
  } finally {
    client.disconnect();
  }
}
