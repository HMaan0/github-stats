"use server";
import prisma from "../db";
export async function getUserData(user: string) {
  try {
    const userData = await prisma.users.findUnique({
      where: {
        name: user,
      },
      select: {
        data: true,
      },
    });
    return userData?.data;
  } catch (error) {
    console.log(error);
  }
}
