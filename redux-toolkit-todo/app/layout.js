import './globals.css'




export default function RootLayout({ children }) {
  return (

    <html lang="en">
      <body className='bg-gray-500'>{children}</body>
    </html>
  )
}
