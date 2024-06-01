"use client";

import React from "react"
import useScrollTop from "@/hooks/useScrollTop";
import { cn } from "@/lib/utils";
import Logo from "./Logo";
import { Button } from "@/components/ui/button";

const Navbar = () => {

  const scrolled = useScrollTop();

  return (
    <div className={cn("text-4xl z-50 bg-background fixed top-0 flex items-center w-full p-6", scrolled && "border-b shadow-sm")}>
      <Logo />
      <div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2 text-lg">
        <Button className="font-chubbo">Login</Button>
      </div>
    </div>
  )
}

export default Navbar;