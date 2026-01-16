import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useEditorStore } from "@/store/use-editor-store";
import { ImageIcon, Link2Icon, SearchIcon, UploadIcon } from "lucide-react";
import { useState } from "react";

export function ImageButton() {
  const { editor } = useEditorStore();
  const [isDialogOpen, setIsDialogIOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  const onChange = (src: string) => {
    editor?.chain()?.focus().setImage({ src }).run();
  };

  const onUpload = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement)?.files?.[0];
      if (file) {
        const imageURL = URL.createObjectURL(file);
        onChange(imageURL);
      }
    };
    input.click();
  };

  const hadndleImageURLSubmit = () => {
    if (imageUrl) {
      onChange(imageUrl);
      setImageUrl("");
      setIsDialogIOpen(false);
    }
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button
            className={cn(
              "h-7 min-w-7 shrink-0 flex flex-col justify-center items-center rounded-sm  hover:bg-neutral-200/80 px-1.5 overflow-hidden text-sm"
            )}
          >
            <ImageIcon className="size-4" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onClick={onUpload}>
            <UploadIcon className="size-4 mr-2" />
            Upload
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setIsDialogIOpen(true)}>
            <SearchIcon className="size-4 mr-2" />
            Paste Image Url
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogIOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Inert Image URL</DialogTitle>
          </DialogHeader>
          <Input
            placeholder="Insert Image Url"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                hadndleImageURLSubmit();
              }
            }}
          />
          <DialogFooter>
            <Button onClick={hadndleImageURLSubmit}>Insert</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
