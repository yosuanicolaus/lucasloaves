import { PropsWithChildren } from "react";
import { Footer } from "./footer";
import { Header } from "./header";

export function Layout({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <>{children}</>
      <Footer />
    </div>
  );
}
