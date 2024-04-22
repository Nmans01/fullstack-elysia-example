import Elysia from "elysia";
import prismaService from "../../integrations/prismaService";

export default new Elysia({ name: "exampleService" })
    .use(prismaService)
    .derive({ as: "global" }, ({ prisma, cookie: { sessionx }, set }) => {

        const getUser = async () => {
            if (!sessionx.value) {
                const user = await prisma.user.create({});
                sessionx.set({ value: user.id, path: "/" });
                return user;
            }

            const user = await prisma.user.findUnique({ where: { id: sessionx.value } });
            if (user) return user;

            sessionx.value = null;
            throw new Error("Invalid session");
        };

        const setUserName = async (name: string) => {
            const { id } = await getUser();

            await prisma.user.update({
                where: { id },
                data: { name }
            });
        }

        return { getUser, setUserName };
    })