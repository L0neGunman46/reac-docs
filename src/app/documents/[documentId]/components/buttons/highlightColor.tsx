import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { useEditorStore } from "@/store/use-editor-store";
import { HighlighterIcon } from "lucide-react";
import { type ColorResult, CompactPicker } from "react-color";

export function HighlightColorButton() {
  const { editor } = useEditorStore();


  const value = editor?.getAttributes("highlight").color || "#ffffff"
  const onChange = (color: ColorResult) => {
    editor?.chain().focus().setHighlight({color: color.hex}).run();
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className={cn(
            "h-7 min-w-7 shrink-0 flex flex-col justify-center items-center rounded-sm  hover:bg-neutral-200/80 px-1.5 overflow-hidden text-sm"
          )}
        >
         <HighlighterIcon className="size-4"/>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="p-0">
        <CompactPicker  color={value} onChange={onChange} />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
