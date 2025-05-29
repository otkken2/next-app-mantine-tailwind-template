import type { Metadata } from "next";
import {
  ColorSchemeScript,
  mantineHtmlProps,
  MantineProvider,
} from "@mantine/core";
import theme from "./theme";
import "./globals.css";
import { Header } from "@/components/Header";
import { CartProvider } from "@/contexts/CartContext";
import { UserProvider } from "@/contexts/UserContext";

export const metadata: Metadata = {
  title: "Next App Mantine Tailwind Template",
  description: "Next App Mantine Tailwind Template",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
      </head>
      <body className="antialiased flex flex-col min-h-screen bg-gray-200">
        <MantineProvider theme={theme}>
          <UserProvider>
            <CartProvider>
              <Header />
              <div className="p-4">{children}</div>
            </CartProvider>
          </UserProvider>
        </MantineProvider>
      </body>
    </html>
  );
}
