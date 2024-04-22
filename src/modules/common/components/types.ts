import { Html } from "@elysiajs/html";

export type Component<P = {}> = (props: P) => JSX.Element;
export type ParentComponent<P = {}> = (props: Html.PropsWithChildren<P>) => JSX.Element;

export type CnComponent<P = {}> = (props: P & { class?: string }) => JSX.Element;
export type CnParentComponent<P = {}> = (props: Html.PropsWithChildren<P & { class?: string }>) => JSX.Element;

type FlowProps<T extends any, P = {}> = P & { children: (arg: T) => JSX.Element };
export type FlowComponent<T extends (args: any) => any, P = {}> = (props: FlowProps<T, P>) => JSX.Element;
export type FlowParentComponent<T extends (args: any) => any, P = {}> = (props: Html.PropsWithChildren<P> | FlowProps<T, P>) => JSX.Element;