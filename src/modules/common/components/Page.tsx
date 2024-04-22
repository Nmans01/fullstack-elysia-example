import { Base } from "./Base";
import { Nav } from "./Nav";
import { ParentComponent } from "./types";

export const Page: ParentComponent = ({ children }) =>
    <Base class="flex flex-col items-center p-4 gap-4">
        <h2 class="font-bold text-3xl">Example Page</h2>
        <Nav />
        {children}
    </Base>