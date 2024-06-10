"use client";

import { useOrigin } from "@/hooks/useOrigin";
import { Doc } from "../../../../convex/_generated/dataModel";
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from "@/components/ui/popover"
import { useMutation } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import { useState } from "react";
import { toast } from "sonner";
import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PublishProps{
  initialData: Doc<"documents">
};

export const Publish = ({ initialData } : PublishProps) => {

  const origin = useOrigin();
  const update = useMutation(api.documents.update)

  const [ copied, setCopied ] = useState(false);
  const [ isSubmitting, setIsSubmitting ] = useState(false);

  const url = `${origin}/preview/${initialData._id}`;

  const onPublish = () => {
    setIsSubmitting(true)

    const promise = update({
      id: initialData._id,
      isPublished: true
    })
    .finally(() => setIsSubmitting(false));

    toast.promise(promise, {
      loading:"Publishing...",
      success:"Node published",
      error: "Failed to Publish"
    });
  };

  const onUnpublish = () => {
    setIsSubmitting(true)

    const promise = update({
      id: initialData._id,
      isPublished: false,
    })
    .finally(() => setIsSubmitting(false));

    toast.promise(promise, {
      loading:"Unpublishing...",
      success:"Node Unpublished",
      error: "Failed to unpublish"
    });
  };

  const onCopy = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);

    setTimeout(() => {
      setCopied(false)
    },1000)
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button size="sm" variant="ghost">
          Publish
          {initialData.isPublished && (
            <Globe 
              className="text-sky-500 w-4 h-4 ml-2"
            />
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent 
        className="w-72"
        align="end"
        alignOffset={8}
        forceMount
      >
        {initialData.isPublished ? (
          <div>
            Published
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center">
            <Globe className="h-8 w-8 text-muted-foreground mb-2" />
          </div>
        )}
      </PopoverContent>
    </Popover>
  )
}