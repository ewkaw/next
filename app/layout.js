import { Roboto_Mono } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import { MainNavigation } from './components/MainNavigation'

// Definicja czcionki roboto mono
const robotoMono = Roboto_Mono({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* Przypisanie czcionki roboto mono do body ( wszystkie dzieci beda ja dziedz ) */}
      <body className={robotoMono.className}>
        <MainNavigation />

        {children}

        {/* Jezeli jakis link jest poza tym co widzi uzytkownik i do niego sie doscrolluje, to next w tle pobierze strone powiazana z tym linkiem */}
        {/* UWAGA: Zeby przyklad zadzialal, trzeba usunac link do nowych zadan z nawigacji wyzej */}
        {/* UWAGA 2: Zadziala po zbudowaniu aplikacji w wersji produkcyjnej */}
        {/* <div className="h-screen"></div>
        <div className="h-screen"></div>
        <div className="h-screen"></div>
        <div className="h-screen"></div>
        
        <Link href="/tasks/new">Nowe zadanie</Link> */}

        <footer className="text-xs italic text-center mt-6">
          Created by Oskar
        </footer>
      </body>
    </html>
  )
}
