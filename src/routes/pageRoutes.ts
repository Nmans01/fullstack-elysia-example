import { html } from "@elysiajs/html";
import Elysia from "elysia";
import examplePages from "../modules/example/examplePages";

export default new Elysia()
    .use(html())
    .use(examplePages)

    .get("", () => Response.redirect("/example"))