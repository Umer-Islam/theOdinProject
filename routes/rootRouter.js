const { Router } = require("express");
const rootRouter = Router();
const { rootGet, rootPost } = require("../controllers/rootController");
rootRouter.get("/", rootGet);
rootRouter.post("/", rootPost);

module.exports = rootRouter;
