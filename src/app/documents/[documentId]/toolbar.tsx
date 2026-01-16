"use client";

import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { useEditorStore } from "@/store/use-editor-store";
import {
  BoldIcon,
  ItalicIcon,
  ListTodoIcon,
  LucideIcon,
  MessageSquarePlusIcon,
  PrinterIcon,
  Redo2Icon,
  RemoveFormattingIcon,
  SpellCheckIcon,
  UnderlineIcon,
  Undo2Icon,
} from "lucide-react";
import { FontFamilyButton } from "./components/buttons/fontFamily";
import { HeadingLevelButton } from "./components/buttons/headingLevel";
import { TextColorButton } from "./components/buttons/textColor";
import { HighlightColorButton } from "./components/buttons/highlightColor";

// create a toolbar button component
interface ToolBarButtonProps {
  onClick?: () => void;
  isActive?: boolean;
  icon: LucideIcon;
}

// remap the icon from props to Icon so that it can be used as a component
function ToolBarButton({ onClick, isActive, icon: Icon }: ToolBarButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "text-sm h-7 min-w-7 flex items-center justify-center rounded-sm hover:bg-neutral-200/80",
        isActive && "bg-neutral-200/80",
      )}
    >
      <Icon className="size-4" />
    </button>
  );
}

/*
this
{
  label: "Undo",
  icon: Undo2Icon,
  onClick: () => editor?.chain().focus().undo().run(),
},
works for all cases but when we were intializing the editor
we used
onCreate({ editor }) {
  setEditor(editor);
},
this updates the editor onCreate but i want to keep it in sync for any updates possible
*/
export function Toolbar() {
  const { editor } = useEditorStore();

  const sections: {
    label: string;
    icon: LucideIcon;
    onClick: () => void;
    isActive?: boolean;
  }[][] = [
    [
      {
        label: "Undo",
        icon: Undo2Icon,
        onClick: () => editor?.chain().focus().undo().run(),
      },
      {
        label: "Redo",
        icon: Redo2Icon,
        onClick: () => editor?.chain().focus().redo().run(),
      },
      {
        label: "Print",
        icon: PrinterIcon,
        onClick: () => window.print(),
      },
      {
        label: "Spell Check",
        icon: SpellCheckIcon,
        onClick: () => {
          const curr = editor?.view?.dom.getAttribute("spellcheck");
          editor?.view?.dom?.setAttribute(
            "spellcheck",
            curr === "false" ? "true" : "false",
          );
        },
      },
    ],
    [
      {
        label: "Bold",
        icon: BoldIcon,
        isActive: editor?.isActive("bold"),
        onClick: () => editor?.chain()?.toggleBold().run(),
      },
      {
        label: "Italic",
        icon: ItalicIcon,
        isActive: editor?.isActive("italic"),
        onClick: () => editor?.chain()?.toggleItalic().run(),
      },
      {
        label: "Underline",
        icon: UnderlineIcon,
        isActive: editor?.isActive("underline"),
        onClick: () => editor?.chain().toggleUnderline()?.run(),
      },
    ],
    [
      {
        label: "Comment",
        icon: MessageSquarePlusIcon,
        onClick: () => console.log("Todo; Comment"),
        isActive: false,
      },
      {
        label: "List Todo",
        icon: ListTodoIcon,
        onClick: () => editor?.chain().focus().toggleTaskList().run(),
        isActive: editor?.isActive("taskList"),
      },
      {
        label: "Remove Formatting",
        icon: RemoveFormattingIcon,
        onClick: () => editor?.chain()?.focus().unsetAllMarks().run(),
      },
    ],
  ];

  // we are spreading item in ToolBarButton like {...item} because item props are compatible with ToolBarButtonProps
  return (
    <div className="bg-[#F1F4F9] px-2.5 py-0.5 rounded-[24px] min-h-[40px] flex items-center gap-x-0.5 overflow-x-auto">
      {sections[0].map((item) => (
        <ToolBarButton key={item.label} {...item} />
      ))}
      <Separator orientation="vertical" className="h-6! bg-neutral-300" />
      <FontFamilyButton/>
      <Separator orientation="vertical" className="h-6! bg-neutral-300" />
      <HeadingLevelButton/>
      <Separator orientation="vertical" className="h-6! bg-neutral-300" />
      {/* Font Size */}
      <Separator orientation="vertical" className="h-6! bg-neutral-300" />
      {sections[1].map((item) => (
        <ToolBarButton key={item.label} {...item} />
      ))}
      <TextColorButton/>
      <HighlightColorButton/>
      <Separator orientation="vertical" className="h-6! bg-neutral-300" />
      {/*Tododo Link*/}
      {/*Image*/}
      {/*Align*/}
      {/*Align height*/}
      {/* List*/}
      {sections[2].map((item) => (
        <ToolBarButton key={item.label} {...item} />
      ))}
    </div>
  );
}
