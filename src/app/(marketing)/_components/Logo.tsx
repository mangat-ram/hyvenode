import React from "react";
import { cn } from "@/lib/utils";

const Logo = () => {
  return (
    <div className="hidden md:flex items-center gap-x-2">
      <p className={cn("font-bold")}>
        <span className="text-blue-900">H</span>yve<span className="text-blue-900">N</span>ode
      </p>
    </div>
  )
}

export default Logo