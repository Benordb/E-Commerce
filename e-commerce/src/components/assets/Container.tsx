import { PropsWithChildren } from "react";
type PropsWithChildrenWithBackground = {
    background: string;
} & PropsWithChildren
export const Container = ({ children, background }: PropsWithChildrenWithBackground) => {
    return <div className={background}>
        <div className="max-w-[1241px] m-auto">{children}</div>
    </div>
}