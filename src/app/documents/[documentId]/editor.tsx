// for pages and layout we use default export, everything else we use named export

"use client";
import { TaskItem, TaskList } from "@tiptap/extension-list";
import { useEditor, EditorContent } from "@tiptap/react";
import { TableKit } from "@tiptap/extension-table";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import { FontFamily, TextStyle, Color } from '@tiptap/extension-text-style'
import { useEditorStore } from "@/store/use-editor-store";
import Highlight from '@tiptap/extension-highlight'

// padding left and right in attributes will be dynamic, that is why we are writing it in style
export function Editor() {
  const { setEditor } = useEditorStore();
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
      StarterKit,
      FontFamily,
      Highlight.configure({multicolor: true}),
      Color,
      TextStyle,
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
    ],
    content: ` <table>
             <tbody>
               <tr>
                 <th>Name</th>
                 <th colspan="3">Description</th>
               </tr>
               <tr>
                 <td>Cyndi Lauper</td>
                 <td>Singer</td>
                 <td>Songwriter</td>
                 <td>Actress</td>
               </tr>
             </tbody>
             </table>`,
    // Don't render immediately on the server to avoid SSR issues
    immediatelyRender: false,
  });

  return (
    <div className="size-full overflow-x-auto bg-[#f9fbfd] px-4 print:p-0 print:bg-white print:overflow-visible">
      <div className="min-w-max flex justify-center w-[816px] py-4 print:py-0 mx-auto print:w-full print:min-w-0">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
}
