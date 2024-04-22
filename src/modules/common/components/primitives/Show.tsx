export default <T,>(props: {
    when: T | undefined | null | false,
    fallback?: JSX.Element | JSX.Element[],
    children: JSX.Element | JSX.Element[] | ((item: T) => JSX.Element | JSX.Element[]),
}) => <>
        {props.when
            ? props.children instanceof Function
                ? props.children(props.when)
                : props.children
            : props.fallback ?? null
        }
    </>;