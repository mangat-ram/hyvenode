"use client";

import React from "react";

import {
  BlockNoteEditor,
  PartialBlock
} from "@blocknote/core";
import {
  BlockNoteViewRaw,
  useBlockNoteEditor,
  useCreateBlockNote,
  useEditorChange
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
  editable = true
}: EditorProps) => {

  const editor: BlockNoteEditor = useEditorChange({
    editable,
    initialContent: 
      initialContent 
      ? JSON.parse(initialContent) as PartialBlock[] 
      : undefined,
    onEditorContentChange: (editor) => {
      onChange(JSON.stringify(editor.topLevelBlocks, null, 2));
    },
  })

  return (
    <div>
      <BlockNoteViewRaw 
        editor={editor}
        
      />
    </div>
  )
}