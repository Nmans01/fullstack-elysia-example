import Elysia from "elysia";
import exampleService from "../exampleService";

export default new Elysia()
    .use(exampleService)
    .derive({ as: "global" }, ({ setUserName }) => {

        const SetName = async (name: string) => {
            await setUserName(name);

            return <h1 hx-swap-oob="innerHTML" id="message">
                Hello, {name}!
            </h1>;
        }

        return { SetName };
    })