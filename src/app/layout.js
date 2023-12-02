import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const myFont = localFont({
  src: [
    { path: "./font/Product-Sans-Regular.ttf", weight: "400", style: "normal" },
    { path: "./font/Product-Sans-Bold.ttf", weight: "700", style: "bold" },
  ],
});

export const metadata = {
  title: "Embrace Mental Illness",
  description: "Find what's holding you back",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${myFont.className} pageBody`}>
        <Header />
        <div className="bodyGlobal">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
