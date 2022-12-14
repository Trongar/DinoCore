import React from "react"
import { Lato } from "@next/font/google"
import "styles/globals.css"
import { Html } from "next/document"
import { Navbar } from "components/Navbar"
import { NavItem } from "types"
import { cn } from "lib/utils"
import Link from "next/link"
const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
})
const navItems: NavItem[] = [
  {
    title: "Test",
    isExternal: false,
    href: "/Test",
  },
  {
    title: "Source Code",
    isExternal: true,
    href: "https://github.com/Trongar/DinoCore",
  },
]
const layout = ({ children }: any) => {
  return (
    <html>
      <body className={cn(lato.className, 'min-h-screen flex flex-col')}>
        <Navbar items={navItems} />
        <main className="p-20 grow">{children}</main>
        <footer className="px-20 py-5 text-xs text-slate-300">
          Web created by <Link className="underline" href="https://github.com/Trongar" target="_blank">Trongar</Link>
        </footer>
      </body>
    </html>
  )
}

export default layout
