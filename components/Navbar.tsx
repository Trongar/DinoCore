/* eslint-disable react/jsx-pascal-case */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-expressions */

"use client"

import { cn } from "lib/utils"
import { MobileNav } from "components/mobile-nav"
import Link from "next/link"
import { useSelectedLayoutSegment } from "next/navigation"
import React, { useEffect, useState } from "react"
import { NavItem } from "types"
import { TfiClose, TfiMenu } from "react-icons/tfi"
import Image from "next/image"

interface MainNavProps {
  items: NavItem[]
  children?: React.ReactNode
}

export const Navbar = ({ items, children }: MainNavProps) => {
  const [top, setTop] = useState(true)
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false)
  const segment = useSelectedLayoutSegment()

  // detect whether user has scrolled the page down by 10px
  useEffect(() => {
    const scrollHandler = () => {
      window.scrollY > 10 ? setTop(false) : setTop(true)
    }
    window.addEventListener("scroll", scrollHandler)
    return () => window.removeEventListener("scroll", scrollHandler)
  }, [top])
  return (
    <header
      className={`sticky top-0 z-40 ${
        !top && "bg-transparent shadow-lg backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto">
        <div className="flex h-16 items-center justify-between py-4 px-2">
          <div className="flex gap-6 md:gap-10">
            <Link className="hidden items-center space-x-2 md:flex" href="/">
              <Image className="w-8 h-8" src="/logo.svg" alt="Workflow" />
              <span className="hidden font-bold sm:inline-block">DinoCore</span>
            </Link>
            <nav className="hidden gap-6 md:flex">
              {items.map((item: NavItem, index: number) => (
                <Link
                  key={index}
                  target={item.isExternal ? "_blank" : "_self"}
                  rel={item.isExternal ? "noreferrer" : undefined}
                  href={item.disabled ? "#" : item.href}
                  className={cn(
                    "flex items-center text-lg font-semibold text-gray-one sm:text-sm",
                    item.href.startsWith(`/${segment}`) && "text-white",
                    item.disabled && "cursor-not-allowed opacity-80",
                  )}
                >
                  {item.title}
                </Link>
              ))}
            </nav>
            <button
              className="flex items-center space-x-2 md:hidden"
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
              {showMobileMenu ? <TfiClose /> : <TfiMenu />}
              <span className="font-bold">
                {showMobileMenu ? "Close" : "Menu"}
              </span>
            </button>
          </div>
          <nav>
            <iframe
              src="https://ghbtns.com/github-btn.html?user=trongar&repo=dinocore&type=star&count=true&size=large"
              frameBorder="0"
              scrolling="0"
              width="170"
              height="30"
              title="GitHub"
              className="flex justify-end"
            />
          </nav>
        </div>
        {showMobileMenu && <MobileNav items={items}>{children}</MobileNav>}
      </div>
    </header>
  )
}
