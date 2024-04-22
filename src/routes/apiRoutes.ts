import Elysia from "elysia";
import exampleController from "../modules/example/exampleController";

export default new Elysia({ prefix: "/api" })
    .group("/htmx", { detail: { tags: ["HTMX"] } }, app => app
        .use(exampleController)
    )