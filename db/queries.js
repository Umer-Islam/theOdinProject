const prisma = require("./db");
const db = {
  // ... you will write your Prisma Client queries here
  createUser: async (username, email, hashed_password) => {
    try {
      const user = await prisma.user.create({
        data: {
          username,
          email,
          hashed_password,
        },
      });
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  },
  //   createUser("hehe", "hehe@hee.com", "123");
  getAllUsers: async () => {
    try {
      const users = await prisma.user.findMany({});
      console.log(users);
      return users;
    } catch (error) {
      console.log(error);
    }
  },
};
module.exports = db;
// // 4
// main()
//   .then(async () => {
//     await prisma.$disconnect();
//   })
//   .catch(async (e) => {
//     console.error(e);
//     // 5
//     await prisma.$disconnect();
//     process.exit(1);
//   });
