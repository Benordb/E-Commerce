import { AdminContainer } from "@/components/admin";
import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
    return (
        <>
            <AdminContainer>
                {children}
            </AdminContainer>
        </>
    );
}
