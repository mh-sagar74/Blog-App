import "./globals.css";
import Link from "next/link";
import { Roboto } from "next/font/google";
import { Suspense } from "react";

const roboto = Roboto({ weight: "400", subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.className} m-6`}>
        <ul className="flex gap-6 mb-6">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/blog"}>Blog</Link>
          </li>
        </ul>
        <hr className="mb-6" />
        <Suspense fallback={null}>{children}</Suspense>
      </body>
    </html>
  );
}
