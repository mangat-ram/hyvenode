"use client";

import React from "react" 
import Image from "next/image";
import { useUser } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import { LucidePlus } from "lucide-react";
import { useMutation } from "convex/react";
import { api } from "../../../../../convex/_generated/api";
import { toast } from "sonner";

const DocumentsPage = () => {

  const { user } = useUser();
  const create = useMutation(api.documents.create);

  const onCreate = () => {
    const promise = create({ title: "Untitled" })

    toast.promise(promise, {
      loading: "Creating a new Node...",
      success: "New Node created 😍!",
      error: "Failed to create new Node 😒!!"
    })
  }

  return (
    <div className="h-full flex flex-col items-center justify-center space-y-4">
      <Image
        src="/ws2.png"
        width="400"
        height="400"
        alt="ws"
        className="-mt-16"
      />
      <h2 className="text-2xl font-bold font-feature">
        Welcome to {user?.firstName}&apos;s HyveNode
      </h2>
      <Button onClick={onCreate}>
        <LucidePlus className="h-6 w-6 mr-2" />
        <span className="text-lg">Create a Node</span>
      </Button>
    </div>
  )
}

export default DocumentsPage