import Elysia from "elysia";
import ExamplePage from "./components/ExamplePage";

export default new Elysia({ prefix: "/example" })
    .use(ExamplePage)
    .get("", ({ ExamplePage }) => ExamplePage())