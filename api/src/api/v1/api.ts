// import Router from "koa-router";
// import { sendEmail } from "../../services/email";
// import { Context } from "koa";

// const router = new Router();

// router.prefix("/v1");

// router.get("/version", async (ctx: any) => {
//     return ctx.ok({
//         version: process.env.VERSION,
//     });
// });

// router.post("/email", async (ctx) => {
//     await sendEmail(ctx);
// });

// router.post("/test", async (ctx: any) => {
//     return ctx.ok("Hi");
// });

// export { router as v1Router };
