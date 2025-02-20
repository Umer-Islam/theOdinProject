import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  //   const user = await prisma.user.create({
  //     data: {
  //       name: "je",

  //       email: " je@gmail.com",
  //     },
  //   });
  //   console.log(user)

  // get all users
  const allUsers = await prisma.user.findMany();
  console.log(allUsers);
  //   //create a new article
  //   const createNewArticle = await prisma.article.create({
  //     data: {
  //       title: "first article",
  //       body: "text body",
  //       createAt: new Date(),
  //       author: {
  //         connect: {
  //           id: 1,
  //         },
  //       },
  //     },
  //   });
  //   console.log(createNewArticle);

  /* view all articles */
  const allArticles = await prisma.article.findMany();
  console.log(allArticles);

  const createUserAndArticle = await prisma.user.create({
    data: {
      name: johniee,

      email: "jhneiee@MediaList.com",
      articles: {
        create: {
          createAt: new Date(),
          title: "johniee first article",
          body: "article body",
        },
      },
    },
  });
  console.log(createUserAndArticle);
}

main()
  .then(async () => {
    prisma.$disconnect();
  })
  .catch(async (error) => {
    console.log(error);
    prisma.$disconnect();
    process.exit(1);
  });
