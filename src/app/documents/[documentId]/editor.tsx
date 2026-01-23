// for pages and layout we use default export, everything else we use named export

"use client";
import { TaskItem, TaskList } from "@tiptap/extension-list";
import { useEditor, EditorContent } from "@tiptap/react";
import { TableKit } from "@tiptap/extension-table";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import { FontFamily, TextStyle, Color } from "@tiptap/extension-text-style";
import Highlight from "@tiptap/extension-highlight";
import TextAlign from "@tiptap/extension-text-align";
import Link from "@tiptap/extension-link";

import { useEditorStore } from "@/store/use-editor-store";
import { FontSizeExtension } from "@/extensions/font-size";
import { LineHeightExtension } from "@/extensions/line-height";
import { Ruler } from "./ruler";

import {
  FloatingToolbar,
  useLiveblocksExtension,
} from "@liveblocks/react-tiptap";
import { Threads } from "./threads";

// padding left and right in attributes will be dynamic, that is why we are writing it in style
export function Editor() {
  const { setEditor } = useEditorStore();

  const liveBlocks = useLiveblocksExtension();

  const editor = useEditor({
    onCreate({ editor }) {
      setEditor(editor);
    },
    // cleanup with Ondestroy, if we unmoun the error, clean the global state
    onDestroy() {
      setEditor(null);
    },
    onUpdate({ editor }) {
      setEditor(editor);
    },
    onSelectionUpdate({ editor }) {
      setEditor(editor);
    },
    onTransaction({ editor }) {
      setEditor(editor);
    },
    onFocus({ editor }) {
      setEditor(editor);
    },
    onBlur({ editor }) {
      setEditor(editor);
    },
    onContentError({ editor }) {
      setEditor(editor);
    },
    editorProps: {
      attributes: {
        style: "padding-left:56px; padding-right:56px;",
        class:
          "focus:outline-none print:border-0 bg-white border border-[#C7C7C7] flex flex-col min-h-[1054px] w-[816px] pt-10 pr-14 pb-10 cursor:text",
      },
    },
    extensions: [
      liveBlocks,
      StarterKit,
      FontSizeExtension,
      LineHeightExtension.configure({
        types: ["paragraph", "heading"],
        defaultLineHeight: "normal",
      }),
      FontFamily,
      Highlight.configure({ multicolor: true }),
      Color,
      TextStyle,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      TaskList,
      TaskItem.configure({ nested: true }),
      TableKit.configure({ table: { resizable: true } }),
      Image.configure({
        inline: true,
        allowBase64: true,
        resize: {
          enabled: true,
          alwaysPreserveAspectRatio: true,
          minWidth: 50,
          minHeight: 50,
        },
      }),
      Link.configure({
        openOnClick: false,
        autolink: true,
        defaultProtocol: "https",
        protocols: ["http", "https"],
      }),
    ],
    // Don't render immediately on the server to avoid SSR issues
    immediatelyRender: false,
  });
  // w-[816px] === w-204
  return (
    <div className="size-full overflow-x-auto bg-[#f9fbfd] px-4 print:p-0 print:bg-white print:overflow-visible">
      <Ruler />
      <div className="min-w-max flex justify-center w-204 py-4 print:py-0 mx-auto print:w-full print:min-w-0">
        <EditorContent editor={editor} />
        <Threads editor={editor} />
        <FloatingToolbar editor={editor} />
      </div>
    </div>
  );
}
