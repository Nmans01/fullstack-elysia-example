import Elysia from "elysia";

const paramsToFile = (prefix: string) => ({ params: { file } }: { params: { file: string } }) => Bun.file(`public/${prefix}/${file}`);

export default new Elysia({ prefix: "/public" })
  .guard({ detail: { tags: ["static"] } }, app => app

    .guard({
      beforeHandle: ({ set }) => { set.headers["Cache-Control"] = "max-age=604800" }
    }, app => app

      .get("/js/:file", paramsToFile('js'))

      .get("/img/:file", paramsToFile('img'))
    )

    .get("/css/:file", paramsToFile('css'))
  )
