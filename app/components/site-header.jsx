"use client";

import React from "react";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image"

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="#home" className="flex items-center gap-2">
          <Image
            src="/Logo.png"
            alt="Medvolve Liens Logo"
            width={100}
            height={100}
          />
         
          <span className="text-xl font-bold ml-[-25px] tracking-tight bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent">
            Medvolve Liens
          </span>

          <span className="sr-only">Home</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-6 md:flex lg:gap-10 lg:mr-10">
          <HeaderLink href="#about">About</HeaderLink>
          <HeaderLink href="#services">Services</HeaderLink>
          <HeaderLink href="#testimonials">Testimonials</HeaderLink>
          <HeaderLink href="#contact">Contact</HeaderLink>
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex size-9 items-center justify-center rounded-md border text-gray-700 md:hidden"
        >
          {open ? (
            <X className="size-5" aria-hidden="true" />
          ) : (
            <Menu className="size-5" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t bg-white md:hidden">
          <div className="container mx-auto px-4 py-3">
            <div className="flex flex-col gap-2">
              <MobileLink onClick={() => setOpen(false)} href="#about">
                About
              </MobileLink>
              <MobileLink onClick={() => setOpen(false)} href="#services">
                Services
              </MobileLink>
              <MobileLink onClick={() => setOpen(false)} href="#testimonials">
                Testimonials
              </MobileLink>
              <MobileLink onClick={() => setOpen(false)} href="#contact">
                Contact
              </MobileLink>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function HeaderLink({ href = "#", children }) {
  return (
    <Link
      href={href}
      className="text-sm font-bold tracking-tight 
bg-gradient-to-r from-orange-500 to-yellow-400 
bg-clip-text text-transparent
hover:from-purple-500 hover:to-purple-300 transition-colors duration-300 hover:text-lg"
    >
      {children}
    </Link>
  );
}

function MobileLink({ href = "#", onClick, children }) {
  return (
    <Link onClick={onClick} href={href} className="py-2 text-sm text-gray-700">
      {children}
    </Link>
  );
}
