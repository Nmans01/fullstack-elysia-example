export default <T extends readonly any[], U extends JSX.Element>(props: {
    each: T | undefined | null | false;
    fallback?: JSX.Element;
    children: (item: T[number], index: number) => U;
}) => <>
        {props.each && props.each.length
            ? props.each.map((it, i) => props.children(it, i))
            : props.fallback ?? ""
        }
    </>;