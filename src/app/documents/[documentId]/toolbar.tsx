"use client";

import { cn } from "@/lib/utils";
import { useEditorStore } from "@/store/use-editor-store";
import { LucideIcon, Undo2Icon } from "lucide-react";

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
  console.log("Toolbar Editor data: ", editor);

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
    ],
  ];

  // we are spreading item in ToolBarButton like {...item} because item props are compatible with ToolBarButtonProps
  return (
    <div className="bg-[#F1F4F9] px-2.5 py-0.5 rounded-[24px] min-h-[40px] flex items-center gap-x-0.5 overflow-x-auto">
      {sections[0].map((item) => (
        <ToolBarButton key={item.label} {...item} />
      ))}
    </div>
  );
}
