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

enum IconClass {
  style = "size-4 mr-2",
}

export function MenuBarComp() {
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
                <MenubarItem>
                  <FileJsonIcon className={IconClass.style} />
                  JSON
                </MenubarItem>
                <MenubarItem>
                  <GlobeIcon className={IconClass.style} />
                  HTML
                </MenubarItem>
                <MenubarItem>
                  <BsFilePdf className={IconClass.style} />
                  PDF
                </MenubarItem>
                <MenubarItem>
                  <FileTextIcon className={IconClass.style} />
                  Text
                </MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
            <MenubarItem>
              <FilePlusIcon className={IconClass.style} />
              New Docment
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem>
              <FilePenIcon className={IconClass.style} />
              Rename
            </MenubarItem>
            <MenubarItem>
              <TrashIcon className={IconClass.style} />
              Remove
            </MenubarItem>
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
            <MenubarItem>
              <Undo2Icon className={IconClass.style} />
              Undo <MenubarShortcut>⌘Z</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
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
            <MenubarItem>
              <MenubarSub>
                <MenubarSubTrigger>Table</MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarItem>1 x 1</MenubarItem>
                  <MenubarItem>2 x 2</MenubarItem>
                  <MenubarItem>3 x 3</MenubarItem>
                  <MenubarItem>4 x 4</MenubarItem>
                </MenubarSubContent>
              </MenubarSub>
            </MenubarItem>
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
                <MenubarItem>
                  <BoldIcon className={IconClass.style} />
                  Bold <MenubarShortcut>⌘B</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>
                  <ItalicIcon className={IconClass.style} />
                  Italic <MenubarShortcut>⌘I</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>
                  <Underline className={IconClass.style} />
                  Underline <MenubarShortcut>⌘U</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>
                  <StrikethroughIcon className={IconClass.style} />
                  StrikeThrough <MenubarShortcut>⌘S</MenubarShortcut>
                </MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
            <MenubarItem>
              <RemoveFormattingIcon className={IconClass.style} />
              Clear Formatting
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  );
}
