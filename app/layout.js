import { Inter } from "next/font/google";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import "./globals.css";
import Main from "./Main";
import { ThemeProvider } from "./context/themeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <Main>
            <Navbar/>
              {children}
            <Footer/>
          </Main>
        </ThemeProvider>
      </body>
    </html>
  );
}
