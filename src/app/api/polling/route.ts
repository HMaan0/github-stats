import { polling } from "@/lib/actions/postRedis";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

let pollingFirstTime = false;
export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    if (
      session?.user.username &&
      process.env.ADMIN_USERNAME &&
      session?.user.username === process.env.ADMIN_USERNAME
    ) {
      if (pollingFirstTime) {
        return NextResponse.json("Polling is already in process");
      } else {
        await polling();
        pollingFirstTime = true;
      }
      return NextResponse.json("Polling started");
    } else {
      return NextResponse.json("Unauthorized");
    }
  } catch (error) {
    return NextResponse.json(error);
  }
}
