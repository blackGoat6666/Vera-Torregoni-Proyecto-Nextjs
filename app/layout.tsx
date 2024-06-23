import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import Header from '@/app/ui/header';
import CustomSideNav from '@/app/ui/customers/customersidenav';



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Header />
        <div className="flex flex-row">
          <div className="w-full">
            {children}
          </div>
          <div className="flex flex-grow-0 basis-2/24">
            <CustomSideNav />
          </div>
        </div>
      </body>
    </html>
  );
}
