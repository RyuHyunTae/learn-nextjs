import TestNavigation from "../components/test-navigation";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <h1>Layout!</h1>
        <TestNavigation />
        {children}
      </body>
    </html>
  );
}