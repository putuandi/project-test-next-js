import "./globals.css"
import Link from "next/link"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header className="flex justify-center gap-4 bg-green-100 p-4 text-black text-lg">
          <Link href='/'>Home</Link>
          <Link href='/product'>Product</Link>
          <Link href='/blog'>Blog</Link>
        </header>
        {children}
      </body>
    </html>
  )
}