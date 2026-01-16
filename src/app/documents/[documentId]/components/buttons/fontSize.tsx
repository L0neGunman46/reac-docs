import { cn } from "@/lib/utils";
import { useEditorStore } from "@/store/use-editor-store";
import { MinusIcon, PlusIcon } from "lucide-react";
import { useState } from "react";

export function FontSizeButton() {
  const { editor } = useEditorStore();

  const currFontSize = editor?.getAttributes("textStyle").fontSize
    ? editor?.getAttributes("textStyle").fontSize.replace("px", "")
    : "16";

  const [fontSize, setFontSize] = useState(currFontSize);
  const [inpVal, setInpVal] = useState(fontSize);
  const [isEditing, setIsEditing] = useState(false);

  function updateFontSize(newSize: string) {
    const size = parseInt(newSize);
    if (!isNaN(size) && size > 0) {
      editor?.chain().focus()?.setFontSize(`${size}px`).run();
      setFontSize(newSize);
      setInpVal(newSize);
      setIsEditing(false);
    }
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInpVal(e.target.value);
  }

  function handleInpBlur() {
    updateFontSize(inpVal);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      e.preventDefault();
      updateFontSize(inpVal);
      editor?.commands.focus();
    }
  }

  const increment = () => {
    const newSize = parseInt(fontSize) + 1;
    updateFontSize(newSize.toString());
  };

  const decrement = () => {
    const newSize = parseInt(fontSize) - 1;
    if (newSize > 0) {
      updateFontSize(newSize.toString());
    }
  };

  return (
    <div className="flex items-center gap-x-0.5">
      <button
        onClick={decrement}
        className={cn(
          "h-7 w-7 shrink-0 flex justify-center items-center rounded-sm  hover:bg-neutral-200/80"
        )}
      >
        <MinusIcon className="size-4" />
      </button>
      {isEditing ? (
        <input
          type="text"
          value={inpVal}
          onChange={handleInputChange}
          onBlur={handleInpBlur}
          onKeyDown={handleKeyDown}
          className={cn(
            "h-7 w-10 text-sm border border-neutral-400 text-center rounded-sm bg-transparent focus:outline-none focus:ring-0"
          )}
        />
      ) : (
        <button
          onClick={() => {
            setIsEditing(true);
            setFontSize(currFontSize);
          }}
          className={cn(
            "h-7 w-10 text-sm border border-neutral-400 text-center rounded-sm bg-transparent cursor-text"
          )}
        >
          {currFontSize}
        </button>
      )}
      <button
        onClick={increment}
        className={cn(
          "h-7 w-7 shrink-0 flex justify-center items-center rounded-sm  hover:bg-neutral-200/80"
        )}
      >
        <PlusIcon className="size-4" />
      </button>
    </div>
  );
}
