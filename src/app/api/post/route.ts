import { postRedis } from "@/lib/actions/postRedis";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await postRedis();
  } catch (error) {
    console.log(error);
  }

  return NextResponse.json({ msg: "Http request" });
}
