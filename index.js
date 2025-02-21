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
  // const allUsers = await prisma.user.findMany();
  // console.log(allUsers);
  //   //create a new article
  // const createNewArticle = await prisma.article.create({
  //   data: {
  //     title: "3rd article",
  //     body: "text body of 3rd article",
  //     createAt: new Date(),
  //     author: {
  //       connect: {
  //         id: 2,
  //       },
  //     },
  //   },
  // });
  // console.log(createNewArticle);

  /* view all articles */
  // const allArticles = await prisma.article.findMany();
  // console.log(allArticles);

  // const createUserAndArticle = await prisma.user.create({
  //   data: {
  //     name: johniee,

  //     email: "jhneiee@MediaList.com",
  //     articles: {
  //       create: {
  //         createAt: new Date(),
  //         title: "johniee first article",
  //         body: "article body",
  //       },
  //     },
  //   },
  // });
  // console.log(createUserAndArticle);

  // view articles of all authors
  // const users = await prisma.user.findMany({
  //   where: {
  //     articles: {
  //       some: {},
  //     },
  //   },
  //   include: {
  //     articles: true,
  //   },
  // });
  // console.log(users);
  // users.forEach((user) => {
  //   console.log(`name: ${user.name}`);
  //   user.articles.forEach((article) => {
  //     console.log(
  //       `title: ${article.title}, body: ${article.body}, published: ${article.createAt}`
  //     );
  //   });
  // });

  const viewAllArticles = await prisma.article.findMany();
  console.log(viewAllArticles);
  // const DeleteArticle = await prisma.article.delete({
  //   where: {
  //     id: 3,
  //   },
  // });
  // console.log(DeleteArticle);
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
