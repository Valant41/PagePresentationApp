import Header from "./composant/header";

export const metadata = {
  title: "Mon site",
  description: "Site de présentation de mon app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <Header />   
        <main>{children}</main>
      </body>
    </html>
  );
}