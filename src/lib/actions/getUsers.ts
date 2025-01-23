"use server";
import prisma from "../db";
export async function getUsers() {
  try {
    const usersArr = await prisma.users.findMany({
      select: {
        user: true,
      },
    });
    return usersArr;
  } catch (error) {
    console.log(error);
  }
}
