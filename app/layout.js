// app/layout.js
import './globals.css'
import { ThemeProvider } from 'next-themes'
import Navbar from './components/Navbar'

export const metadata = {
  title: 'Chat App',
  description: 'Simple chat app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class">
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}