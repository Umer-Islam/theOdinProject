const express = require("express");
const rootRouter = require("./routes/rootRouter");
const path = require("path");
const signupRouter = require("./routes/signupRotuter");
const loginRouter = require("./routes/loginRouter");
const app = express();
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const session = require("express-session");
const db = require("./db/queries");
const bcrypt = require("bcryptjs");
const logoutRouter = require("./routes/logoutRouter");
const updateUserRouter = require("./routes/updateUserRouter");
const addMessageRouter = require("./routes/addMessageRouter");
const makeAdminRouter = require("./routes/makeAdminRouter");
app.set("views", path.join(__dirname + "/views"));
app.set("view engine", "ejs");
app.use(session({ secret: "cats", resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

//passport
passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      const user = await db.getUserByUsername(username);
      if (!user) {
        return done(null, false, { message: "incorrect username" });
      }
      if (await !bcrypt.compare(password, user.hashed_password)) {
        return done(null, false, { message: "incorrect password" });
      }
      return done(null, user);
    } catch (error) {
      return done(error);
    }
  })
);
passport.serializeUser((user, done) => {
  console.log("serializeUser called...");
  done(null, user.id);
});
passport.deserializeUser(async (id, done) => {
  try {
    console.log("deserializeUser called");
    const user = await db.getUserById(id);
    done(null, user);
  } catch (error) {
    done(error);
  }
});

// app.use(express.bodyParser());
app.use("/", rootRouter);
app.use("/signup", signupRouter);
app.use("/login", loginRouter);
app.use("/logout", logoutRouter);
app.use("/update-status", updateUserRouter);
app.use("/add-message", addMessageRouter);
app.use("/make-admin", makeAdminRouter);
const port = 2121 || process.env.PORT;

app.listen(port, () => {
  console.log(`servers started on: http://localhost:${port}`);
});
