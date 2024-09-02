import { PropsWithChildren } from "react";



export const Container = ({ children }: PropsWithChildren) => {
    return <div className="max-w-[1241px] bg-slate-200 m-auto">{children}</div>
}