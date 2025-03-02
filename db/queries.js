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
  getUserByUsername: async (username) => {
    try {
      // this will always return a single user no need for array destructuring
      const userByname = await prisma.user.findUnique({
        where: { username },
      });

      // an object will be returned
      return userByname;
    } catch (error) {
      console.log(error);
    }
  },
  getUserById: async (id) => {
    const user = await prisma.user.findUnique({ where: { id } });

    return user;
  },
  updateMemberShipStatus: async (id) => {
    await prisma.user.update({
      where: { id },
      data: { membership_status: "exclusive" },
    });
  },
  getAllMessages: async () => {
    const messages = await prisma.messageBoard.findMany({
      include: {
        creator: { select: { username: true } },
      },
    });
    // console.log(messages);

    return messages;
  },
  createMessage: async (creatorId, message) => {
    await prisma.messageBoard.create({
      data: {
        creatorId,
        message,
      },
    });
  },

  getUsernameByMessageCreatorId: async (creatorId) => {
    const user = await prisma.user.findUnique({
      where: { id: creatorId },
      select: { username: true },
    });

    // console.log(user);
    return user;
  },
  makeExclusive: async (id) => {
    return await prisma.user.update({
      where: { id },
      data: { membership_status: "exclusive" },
    });
  },
  makeAdmin: async (id) => {
    return await prisma.user.update({
      where: { id },
      data: { is_admin: true },
    });
  },
  isAdmin: async (userId) => {
    const is_admin = await prisma.user.findUnique({
      where: { id: userId },
      select: { is_admin: true },
    });
    // console.log(is_admin);
    return is_admin;
  },
  deleteMessageById: async (message_id) => {
    await prisma.messageBoard.delete({ where: { id: message_id } });
  },
};
// db.isAdmin(1);
// db.deleteMessageById(3)
// db.makeExclusive(2);
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
