import { montserrat } from './ui/font';
import './ui/global.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        <div className='py-10 flex justify-center items-center bg-red-300'>Esto deberia ser el header</div>
        <div style={{border:"1px solid #000"}}>
          {children}
        </div>
        <footer className='py-10 flex justify-center items-center bg-blue-300'>
          Esto deberia ser el footer
        </footer>
        </body>
    </html>
  );
}
