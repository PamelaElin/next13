import Navigation from './components/Navigation'
import '../styles/globals.css'
import { font } from './font'
export default function RootLayout ({ children }) {
  return (
    <html>
      <head>
        <title>My app next 13</title>
      </head>
      <body className={font.className}>
{/* className={font.variable} y usarla en el style */}
        <Navigation />

        {children}
      </body>
    </html>
  )
}
