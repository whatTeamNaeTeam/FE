import { MswComponent } from '@/_components/MSWComponents'
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
          <body>{children}</body>
        </JotaiProvider>
      </Providers>
    </html>
  )
}
