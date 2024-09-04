"use client";

import { AnimatePresence, motion as m } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import logoImage from "@/../public/images/logo.webp";
import { homeRoute } from "@/constants/routes";

import MenuAction from "./menu-action";
import NavItems from "./nav-items";

export default function SideNav() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  // Prevent scroll when menu open
  useEffect(() => {
    if (isOpen) document.body.classList.add("overflow-hidden");
    else document.body.classList.remove("overflow-hidden");

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  return (
    <m.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
      className="absolute left-0 top-0 z-40 flex h-28 w-screen items-center justify-between px-4"
    >
      <Logo />
      <MenuAction
        isOpen={isOpen}
        handleOpen={handleOpen}
        handleClose={handleClose}
      />

      <AnimatePresence>
        {isOpen && <NavItems handleClose={handleClose} />}
      </AnimatePresence>
    </m.nav>
  );
}

function Logo() {
  return (
    <Link href={homeRoute}>
      <Image
        src={logoImage}
        alt={process.env.NEXT_PUBLIC_APP_NAME}
        width={497}
        height={401}
        priority
        unoptimized
        className="w-24 object-contain"
      />
    </Link>
  );
}
