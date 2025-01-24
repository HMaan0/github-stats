"use server";
import { createClient } from "redis";

const client = createClient();
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
