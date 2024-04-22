import Elysia, { Static, t } from "elysia";

const setName = t.Object({
    name: t.String()
});

export type SetName = Static<typeof setName>;

export default new Elysia({ name: "exampleModel" })
    .model({
        setName
    })