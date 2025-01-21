import { getRedis } from "@/lib/actions/postRedis";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const data = await getRedis("brarkaran2004");
    return NextResponse.json({ data });
  } catch (error) {
    console.log(error);
  }

  return NextResponse.json({ msg: "Http request" });
}
