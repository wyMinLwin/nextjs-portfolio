"use client"
import * as React from "react";
import Image from "next/image";
import { motion, useCycle } from 'framer-motion'
import Link from "next/link";
import ThemeToggler from "./ThemeToggler";
const sideBar  = {
  closed: {
    scale: 0,
    borderRadius:9999,
    width:50,height:50,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40,
      ease: "easeInOut",
    }
  },
  open: {
    scale: 1,
    borderRadius:0,
    width:'100vw',height:'100vh',
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40,
      ease: "easeInOut",
    }
  }
}
const paths = ['about','project','contact']

export default function App() {
  const [isOpen, toggleOpen] = useCycle(false, true);
  return (
    <>
      <Image onClick={() => toggleOpen()} src={'/images/hamburger.svg'} className="ml-auto sm:hidden relative z-20 click-effect" width={40} height={40} alt='hamberger meu' />
      <motion.nav
        className="w-screen h-screen fixed top-0 right-0 dark:bg-black bg-white"
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={sideBar}
      >
        <div className="relative w-full h-full z-20 flex flex-col justify-center items-center gap-y-3">
          {
            paths.map(path => (
              <Link href={path} className='' key={path}>
                <span className='underline-effect text-lg before:bg-black dark:before:bg-white capitalize'>{path}</span>
              </Link>))
          }
          <span className="absolute top-0 left-0 px-3 sm:px-6 md:px-10 lg:px-32 py-2 md:py-2">
            <ThemeToggler />
          </span>
        </div>
      </motion.nav>
    </>
  );
}

