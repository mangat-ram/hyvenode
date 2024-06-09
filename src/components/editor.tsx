import {
  BlockNoteEditor,
  PartialBlock
} from "@blocknote/core";
import { useBlockNoteEditor, useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/core/fonts/inter.css";
import "@blocknote/mantine/style.css";

import { useEdgeStore } from "@/lib/edgestore";

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

  const { edgestore } = useEdgeStore();

  const editor = useBlockNoteEditor();

  return (
    <div>
      <BlockNoteView 
        editor={editor}
      />
    </div>
  )
}

