import '../globals.css';
import Nav from '../components/Nav';

export const metadata = { title: 'PTE Portal', description: 'PTE Practice Portal' };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main style={{ padding: 24 }}>{children}</main>
      </body>
    </html>
  );
}
