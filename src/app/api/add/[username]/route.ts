import { postDB } from "@/lib/actions/postDB";
import { postRedis } from "@/lib/actions/postRedis";
import { authOptions } from "@/lib/auth";
import axios from "axios";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ username: string }> }
) {
  const username = (await params).username;
  try {
    const session = await getServerSession(authOptions);
    if (
      session?.user.username &&
      process.env.ADMIN_USERNAME &&
      session?.user.username === process.env.ADMIN_USERNAME
    ) {
      if (username) {
        const res = await axios(`https://api.github.com/users/${username}`);

        if (res.status) {
          await postRedis(username);
          await postDB(username);
          return NextResponse.json(`${username} is added in cache and db`);
        } else {
          return NextResponse.json(`${res.status} is not falsy`);
        }
      } else {
        return NextResponse.json(`${username} username is undefined`);
      }
    } else {
      return NextResponse.json("unauthorized");
    }
  } catch (error) {
    return NextResponse.json({
      message: `${username} doesn't existed on github`,
      error,
    });
  }
}
