
import { Footer, Header } from "@/components";
import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
    return (
        <>
            <Header />
            <div style={{ minHeight: "calc(100vh - 370px - 128px)" }}>
                {children}
            </div>
            <Footer />
        </>
    );
}
