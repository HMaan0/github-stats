"use server";
import { APIResponse } from "@harshmaan/github_rank_backend_types";
import axios from "axios";
import { createClient } from "redis";
const client = createClient();
export async function postRedis(
  username: string
): Promise<{ data: APIResponse } | undefined> {
  try {
    await client.connect();
    const res = await axios.get(`http://localhost:3002/${username}`);
    const data: APIResponse = await res.data;
    await client.set(username, JSON.stringify(data));
    return { data: data };
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
