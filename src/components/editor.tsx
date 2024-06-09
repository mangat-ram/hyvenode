"use client";

import React from "react";

import {
  BlockNoteEditor,
  PartialBlock
} from "@blocknote/core";
import {
  BlockNoteViewRaw,
  useBlockNote
} from "@blocknote/react";
import "@blocknote/react/style.css";

interface EditorProps {
  onChange: (value: string) => void;
  initialContent? : string;
  editable? : boolean;
}

export const Editor = ({
  onChange,
  initialContent,
  editable
}: EditorProps) => {
  return (
    <div>Editor</div>
  )
}