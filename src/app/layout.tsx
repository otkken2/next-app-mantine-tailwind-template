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
