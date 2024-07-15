import { MswComponent } from '@/_components/MSWComponents'
import Navigation from '@/_components/Navigation'
import JotaiProvider from '@/_lib/JotaiProvider'
import Providers from '@/_lib/Provider'
import '@/styles/global.css'

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
            {children}
          </body>
        </JotaiProvider>
      </Providers>
    </html>
  )
}
