"use server";
import prisma from "../db";
export async function postDB(user: string) {
  const existingUsers = await prisma.users.findMany({
    select: { user: true },
  });
  //this is checking not new user
  const newUser = existingUsers[0].user.includes(user);

  if (newUser) {
    return;
  } else {
    await prisma.users.updateMany({
      data: {
        user: [...existingUsers[0].user, user],
      },
    });
  }
}
