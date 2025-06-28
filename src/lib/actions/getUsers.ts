import prisma from "../db";
export async function getUsers() {
  try {
    const users = await prisma.users.findMany({
      orderBy: {
        score: "desc",
      },
      select: {
        id: true,
        name: true,
        score: true,
        LastFetched: true,
        data: true,
      },
    });
    return users;
  } catch (error) {
    console.log(error);
  }
}
