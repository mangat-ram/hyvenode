import React from "react";
import Navbar from "./_components/Navbar";

interface LandingPageProps{
  children: React.ReactNode;
}

const LandingPageLayout = ({children} : LandingPageProps) => {
  return (
    <div className="h-full">
      <Navbar />
      <main className="h-full pt-24">
        {children}
      </main>
    </div>
  )
}

export default LandingPageLayout