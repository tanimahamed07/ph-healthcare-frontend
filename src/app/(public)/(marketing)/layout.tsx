import Header from "@/components/ui/layout/public/Header";
import Footer from "@/components/ui/layout/public/Footer";
import { ReactNode } from "react";

export default function layout({ children }: { children: ReactNode }) {
  return (
    <div className="">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
