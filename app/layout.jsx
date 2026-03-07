import { Metadata } from 'next'
import './globals.css'
import { Toaster } from 'sonner'

export const metadata = {
  title: 'Rent-a-Skill | Task Marketplace',
  description: 'Connect with verified experts across all skill levels – from talented students to seasoned professionals.',
  generator: 'v0.dev',
}

import { ThemeProvider } from '@/components/theme-provider'

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster position="top-center" richColors />
        </ThemeProvider>
      </body>
    </html>
  )
}
