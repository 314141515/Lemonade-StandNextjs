import "./globals.css";
import ReduxProvider from "./store/Provider";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Lemonade Stand",
  description: "Din lille limonade-forretning",
};

export default function RootLayout({ children }) {
  return (
    <html lang="da">
      <body>
        <ReduxProvider>
          <Navbar />
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}