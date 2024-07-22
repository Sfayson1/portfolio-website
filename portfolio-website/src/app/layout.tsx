import type { Metadata } from "next";
import { Inter, Montserrat, Crimson_Text } from "next/font/google";
import "./globals.css"; 
import { ThemeProvider } from "@/Context/ThemeContext";

const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });
const crimsonText = Crimson_Text({
  subsets: ["latin"],
  weight: "400"
});

export const metadata: Metadata = {
  title: "Sherika Fayson",
  description: "Personal Portfolio website of Sherika Fayson",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={`${inter.className} ${montserrat.className} ${crimsonText.className}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
