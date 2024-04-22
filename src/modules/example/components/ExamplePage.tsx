import Elysia from "elysia";
import { Page } from "../../common/components/Page";
import { Show } from "../../common/components/primitives";
import prismaService from "../../../integrations/prismaService";
import exampleService from "../exampleService";

export default new Elysia()
    .use(prismaService)
    .use(exampleService)
    .derive({ as: "global" }, ({ cookie, getUser }) => {

        const ExamplePage = async () => {
            const { first_visit, times_visited } = cookie;

            if (!first_visit.value) first_visit.set({ value: Date.now(), path: "/" });
            if (!times_visited.value) times_visited.set({ value: 0, path: "/" });
            times_visited.value++;

            const name = await getUser()
                .then(({ name }) => name)
                .catch(() => null);

            return <Page>
                {/* HTMX automatically places title tag in head */}
                <title>Test</title>

                <h1 id="message" class="text-4xl font-bold">
                    <Show when={name} children={(name) => <>
                        Hello, {name}!
                    </>} fallback={<>
                        Hello world!
                    </>} />
                </h1>
                <p>
                    <Show when={times_visited.value === 1} fallback={<>
                        You have visited this page {times_visited.value} times.
                        <br />
                        You first visited this page on {new Date(first_visit.value).toLocaleString()}.
                    </>}>
                        Welcome to this page for the first time!
                    </Show>
                    <br />
                </p>
                <div class="flex flex-col gap-2">
                    What is your name?
                    <form class="flex gap-2"
                        hx-post="api/htmx/example/name"
                        hx-swap="none"
                        hx-trigger="keyup delay:1000ms"
                    >
                        <input id="trigger" type="text" name="name" class="input input-bordered" placeholder="Enter your name..." />
                    </form>
                </div>
            </Page>;
        }

        return { ExamplePage };
    })