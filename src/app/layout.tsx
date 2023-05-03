import Header from "@/components/header/Header";
import "@/styles/globals.css";
import { Nunito } from "next/font/google";
import Providers from "./providers";
import ClientComponent from "@/components/ClientComponent";
import Modal from "@/components/modal/Modal";

const font = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "H-Commerce",
  description: "Welcome to HBO E-Commerec Store",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Providers>
          <ClientComponent>
            <Header />
            {/* <Modal isOpen /> */}
          </ClientComponent>
          <main className="">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
