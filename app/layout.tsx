import './globals.css';

export const metadata = {
  title: 'NextGen 3D Multi-Vendor Marketplace',
  description: 'Admin, Seller & Customer Ecosystem',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body className="bg-slate-900 text-slate-100 min-h-screen font-sans">
        {children}
      </body>
    </html>
  );
}
