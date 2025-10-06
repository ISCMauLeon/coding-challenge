import AppHeader from '@/app/_components/header'
import './globals.css'

export const metadata = {
  title: 'Facealbum',
  description: 'Mauricio Leon\'s code challenge for Couchsurfing',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AppHeader />
        {children}
      </body>
    </html>
  );
}
