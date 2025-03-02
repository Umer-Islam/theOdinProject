const { Router } = require("express");
const { ensureAuthenticated } = require("../authCheck");
const {
  makeAdminGet,
  makeAdminPost,
} = require("../controllers/makeAdminController");
const makeAdminRouter = Router();
makeAdminRouter.get("/", ensureAuthenticated, makeAdminGet);
makeAdminRouter.post("/", makeAdminPost);
module.exports = makeAdminRouter;
