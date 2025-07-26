import "./globals.css";

export const metadata = {
  title: "Siswa Management System",
  description: "Sistem manajemen data siswa dengan fitur CRUD lengkap",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
