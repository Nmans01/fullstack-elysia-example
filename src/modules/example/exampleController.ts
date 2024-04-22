import Elysia from "elysia";
import SetName from "./components/SetName";
import exampleModel from "./exampleModel";

export default new Elysia({ prefix: "/example" })
    .use(exampleModel)
    .use(SetName)

    .post("/name", async ({ body: { name }, SetName }) => SetName(name),
        { body: "setName" })