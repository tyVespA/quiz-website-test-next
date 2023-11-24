import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";

const myFont = localFont({
  src: [
    { path: "./font/Product-Sans-Regular.ttf", weight: "400", style: "normal" },
    { path: "./font/Product-Sans-Bold.ttf", weight: "700", style: "bold" },
  ],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={myFont.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
