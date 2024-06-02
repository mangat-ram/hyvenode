"use client";

import React from "react"
import useScrollTop from "@/hooks/useScrollTop";
import { cn } from "@/lib/utils";
import Logo from "./Logo";
import { Button } from "@/components/ui/button";
import { useConvexAuth } from "convex/react";
import { SignInButton, UserButton } from "@clerk/clerk-react";
import { Ghost } from "lucide-react";
import { Spinner } from "@/components/spinner";
import Link from "next/link";

const Navbar = () => {

  const {isAuthenticated,isLoading} = useConvexAuth();
  const scrolled = useScrollTop();

  return (
    <div className={cn("text-4xl z-50 bg-background fixed top-0 flex items-center w-full p-6", scrolled && "border-b shadow-sm")}>
      <Logo />
      <div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2 text-lg">
        {isLoading && (
          <Spinner />
        )}
        {
          !isAuthenticated && !isLoading && (
            <>
              <SignInButton mode="modal">
                <Button className="font-chubbo">Login</Button>
              </SignInButton>
              <SignInButton mode="modal">
                <Button className="font-chubbo" variant="ghost">Get HyveNode Free</Button>
              </SignInButton>
            </>
          )
        }
        {
          isAuthenticated && !isLoading && (
            <>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/documents">Enter HyveNode</Link>
              </Button>
              <UserButton
                afterSignOutUrl="/"
              />
            </>
          )
        }
      </div>
    </div>
  )
}

export default Navbar;