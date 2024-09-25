import { MswComponent } from '@/_components/MSWComponents'
import Navigation from '@/_components/Navigation'
import JotaiProvider from '@/_lib/JotaiProvider'
import Providers from '@/_lib/Provider'
import { Toaster } from 'react-hot-toast'
import '@/styles/global.css'
import { CommonErrorBoundary } from '@/_components/error/CommonErrorBoundary'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <MswComponent />
      <Providers>
        <JotaiProvider>
          <body>
            <Navigation />
            <CommonErrorBoundary>{children}</CommonErrorBoundary>
            <Toaster position="bottom-right" />
          </body>
        </JotaiProvider>
      </Providers>
    </html>
  )
}
