require("dotenv").config();

const { PORT: port } = process.env;

const Koa = require("koa");
const Router = require("koa-router");
const bodyParser = require("koa-bodyparser");

const api = require("./api");
const db = require("./db");
const jwtMiddleware = require("./lib/middlewares/jwt");

db.connect();
const app = new Koa();
app.use(bodyParser());
app.use(jwtMiddleware);

const router = new Router();
router.use("/api", api.routes());

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(port, () => {
  console.log(`server is listening to port ${port}`);
});
