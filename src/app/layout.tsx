import type { Metadata } from "next";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Sidebar from "@/components/sidebar";

export const metadata: Metadata = {
  title: "Sunnah | Homepage",
  description:
    "Sunnahs of the Messenger, may God bless him and grant him peace, during the day and night",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Sidebar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
