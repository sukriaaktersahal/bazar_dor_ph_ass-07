// updating layout.tsx file
import type { Metadata } from 'next' ; 
import './globals.css'
import {Toaster} from 'react-hot-toast'

// meta data for the website
export const metadata: Metadata = {
  title: 'বাজার দর | আজকের বাজার',
  description: 'বাংলাদেশের নিত্যপ্রয়োজনীয় পণ্যের আজকের দাম ও দাম বাড়া-কমার তথ্য এক নজরে',
};

// root layout component
export default function RootLayout({ children,}:Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="bn">
      <body className="font-bangla min-h-screen flex flex-col">
        {/* toaster notification */}
        <Toaster position="top-center" toastOptions={{ style:{fontFamily: 'Hind Siliguri, sans-serif',},
       }} />
        {children}
      </body>
    </html>
  );
}