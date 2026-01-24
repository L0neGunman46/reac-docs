"use client";

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";
import {
  BoldIcon,
  FileIcon,
  FileJsonIcon,
  FilePenIcon,
  FilePlusIcon,
  FileTextIcon,
  GlobeIcon,
  ItalicIcon,
  PrinterIcon,
  Redo2Icon,
  RemoveFormattingIcon,
  StrikethroughIcon,
  TextIcon,
  TrashIcon,
  Underline,
  Undo2Icon,
} from "lucide-react";
import { BsFilePdf } from "react-icons/bs";
import { useEditorStore } from "@/store/use-editor-store";
import { type Editor } from "@tiptap/react";
import { Doc } from "../../../../../../convex/_generated/dataModel";
import { useMutation } from "convex/react";
import { api } from "../../../../../../convex/_generated/api";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { RemoveDialog } from "@/components/removeDialog";
import { RenameDialog } from "@/components/renameDialog";

type MenuBarProps = {
  data: Doc<"documents">;
};

enum IconClass {
  style = "size-4 mr-2",
}

function insertTable(
  editor: Editor | null,
  { rows, cols }: { rows: number; cols: number },
) {
  editor
    ?.chain()
    .focus()
    .insertTable({ rows, cols, withHeaderRow: false })
    .run();
}

function onDownload(blob: Blob, fileName: string) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = fileName;
  a.click();
}

const onSaveJSON = (editor: Editor | null, title: string) => {
  if (!editor) return;
  const content = editor?.getJSON();
  const blob = new Blob([JSON.stringify(content)], {
    type: "application/json",
  });
  onDownload(blob, `${title}.json`); // todo use document name
};

function onSaveHTML(editor: Editor | null, title: string) {
  if (!editor) return;

  const content = editor?.getHTML();
  const blob = new Blob([content], {
    type: "application/html",
  });
  onDownload(blob, `${title}.html`);
}

function onSaveText(editor: Editor | null, title: string) {
  if (!editor) return;

  const content = editor.getText();
  const blob = new Blob([content], {
    type: "application/plain",
  });
  onDownload(blob, `${title}.txt`);
}

export function MenuBarComp({ data }: MenuBarProps) {
  const { editor } = useEditorStore();
  const router = useRouter();

  const mutation = useMutation(api.documents.create);

  const onNewDocument = () => {
    mutation({
      title: "Untitled Document",
      initialContent: "",
    })
      .catch(() => toast.error("Something went wrong"))
      .then((id) => {
        toast.success("Document Created!");
        router.push(`/documents/${id}`);
      });
  };
  return (
    <div className="flex">
      <Menubar className="border-none bg-transparent shadow-none h-auto p-0">
        <MenubarMenu>
          <MenubarTrigger className="text-sm font-n py-0.5 px-[7px] rounded-sm hover:bg-muted h-auto">
            File
          </MenubarTrigger>
          <MenubarContent className="print:hidden">
            <MenubarSub>
              <MenubarSubTrigger>
                <FileIcon className={IconClass.style} />
                Save
              </MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarItem
                  onClick={() => onSaveJSON(editor, data?.title ?? "document")}
                >
                  <FileJsonIcon className={IconClass.style} />
                  JSON
                </MenubarItem>
                <MenubarItem
                  onClick={() => onSaveHTML(editor, data?.title ?? "document")}
                >
                  <GlobeIcon className={IconClass.style} />
                  HTML
                </MenubarItem>
                <MenubarItem onClick={() => window.print()}>
                  <BsFilePdf className={IconClass.style} />
                  PDF
                </MenubarItem>
                <MenubarItem
                  onClick={() => onSaveText(editor, data?.title ?? "document")}
                >
                  <FileTextIcon className={IconClass.style} />
                  Text
                </MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
            <MenubarItem onClick={() => onNewDocument()}>
              <FilePlusIcon className={IconClass.style} />
              New Docment
            </MenubarItem>
            <MenubarSeparator />
            <RenameDialog documentId={data._id} initialTitle={data.title}>
              <MenubarItem
                onClick={(e) => e.stopPropagation()}
                onSelect={(e) => e.preventDefault()}
              >
                <FilePenIcon className={IconClass.style} />
                Rename
              </MenubarItem>
            </RenameDialog>
            <RemoveDialog documentId={data._id}>
              <MenubarItem
                onClick={(e) => e.stopPropagation()}
                onSelect={(e) => e.preventDefault()}
              >
                <TrashIcon className={IconClass.style} />
                Remove
              </MenubarItem>
            </RemoveDialog>

            <MenubarSeparator />
            <MenubarItem onClick={() => window.print()}>
              <PrinterIcon className={IconClass.style} />
              Print <MenubarShortcut>⌘P</MenubarShortcut>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="text-sm font-n py-0.5 px-[7px] rounded-sm hover:bg-muted h-auto">
            Edit
          </MenubarTrigger>
          <MenubarContent>
            <MenubarItem onClick={() => editor?.chain().focus().undo().run()}>
              <Undo2Icon className={IconClass.style} />
              Undo <MenubarShortcut>⌘Z</MenubarShortcut>
            </MenubarItem>
            <MenubarItem onClick={() => editor?.chain()?.focus().redo().run()}>
              <Redo2Icon className={IconClass.style} />
              Redo <MenubarShortcut>⌘Y</MenubarShortcut>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="text-sm font-n py-0.5 px-[7px] rounded-sm hover:bg-muted h-auto">
            Insert
          </MenubarTrigger>
          <MenubarContent>
            <MenubarSub>
              <MenubarSubTrigger>Table</MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarItem
                  onClick={() => insertTable(editor, { rows: 1, cols: 1 })}
                >
                  1 x 1
                </MenubarItem>
                <MenubarItem
                  onClick={() => insertTable(editor, { rows: 2, cols: 2 })}
                >
                  2 x 2
                </MenubarItem>
                <MenubarItem
                  onClick={() => insertTable(editor, { rows: 3, cols: 3 })}
                >
                  3 x 3
                </MenubarItem>
                <MenubarItem
                  onClick={() => insertTable(editor, { rows: 4, cols: 4 })}
                >
                  4 x 4
                </MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="text-sm font-n py-0.5 px-[7px] rounded-sm hover:bg-muted h-auto">
            Format
          </MenubarTrigger>
          <MenubarContent>
            <MenubarSub>
              <MenubarSubTrigger>
                <TextIcon className={IconClass.style} />
                Text
              </MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarItem
                  onClick={() => editor?.chain().focus().toggleBold().run()}
                >
                  <BoldIcon className={IconClass.style} />
                  Bold <MenubarShortcut>⌘B</MenubarShortcut>
                </MenubarItem>
                <MenubarItem
                  onClick={() => editor?.chain().focus().toggleItalic().run()}
                >
                  <ItalicIcon className={IconClass.style} />
                  Italic <MenubarShortcut>⌘I</MenubarShortcut>
                </MenubarItem>
                <MenubarItem
                  onClick={() =>
                    editor?.chain()?.focus().toggleUnderline().run()
                  }
                >
                  <Underline className={IconClass.style} />
                  Underline <MenubarShortcut>⌘U</MenubarShortcut>
                </MenubarItem>
                <MenubarItem
                  onClick={() => editor?.chain()?.focus()?.toggleStrike().run()}
                >
                  <StrikethroughIcon className={IconClass.style} />
                  StrikeThrough <MenubarShortcut>⌘S</MenubarShortcut>
                </MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
            <MenubarItem
              onClick={() => editor?.chain()?.focus().unsetAllMarks().run()}
            >
              <RemoveFormattingIcon className={IconClass.style} />
              Clear Formatting
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  );
}
