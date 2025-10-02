
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBarComponent from "../components/NavBarComponent";
import BootstrapClient from "../types/BootstrapClient";






export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body>
      <NavBarComponent/>
        <div className="container">
            {children}
        </div>
      <BootstrapClient/>
      </body>
    </html>
  );
}
