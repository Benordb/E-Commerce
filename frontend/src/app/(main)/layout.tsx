
import { Footer, Header } from "@/components";
import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
}
