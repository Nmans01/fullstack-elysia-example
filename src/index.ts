import { Elysia } from "elysia";
import { apiRoutes, pageRoutes, staticRoutes } from "./routes";

const app = new Elysia()
  .use(staticRoutes)
  .use(pageRoutes)
  .use(apiRoutes)

  .listen(3000, ({ hostname, port }) => {
    console.log(`🦊 Elysia is running at ${hostname}:${port}`);
  })
