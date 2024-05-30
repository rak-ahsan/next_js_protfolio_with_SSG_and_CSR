import type { Metadata } from "next";
import { Inter, Roboto, Noto_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/theme-context";
import TopNavBar from "@/components/top-nav-bar";
import SideBar from "@/components/side/side-bar";
import Main from "@/components/main";

const inter = Inter({ subsets: ["latin"] });

const roboto = Noto_Sans({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rakib Ahsan",
  description: "Full Stack Web Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <body className={roboto.className}>
          <Main>{children}</Main>
        </body>
      </ThemeProvider>
    </html>
  );
}
