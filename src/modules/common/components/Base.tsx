import { CnParentComponent } from "./types"

export const Base: CnParentComponent = ({ children, class: classn }) =>
    <html>
        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="stylesheet" href="/public/css/styles.css" />
            <script src="/public/js/htmx.min.js" />
            <script src="/public/js/darkMode.js" />
        </head>
        <body class={classn}>
            {children}
        </body>
    </html>;