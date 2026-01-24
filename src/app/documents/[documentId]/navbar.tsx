"use client";

import Image from "next/image";
import Link from "next/link";
import { DocumentInput } from "./components/navigation/document-input";
import { MenuBarComp } from "./components/navigation/menubar";
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
import { Avatars } from "./components/avatars";
import { Inbox } from "./components/inbox";
import { Doc } from "../../../../convex/_generated/dataModel";

type NavBarProps = {
  data: Doc<"documents">;
};

export function Navbar({ data }: NavBarProps) {
  return (
    <nav className="flex items-center justify-between">
      <div className="flex gap-2 items-center">
        <Link href="/">
          <Image src="/logo.svg" alt="Logo" width={36} height={36} />
        </Link>
        <div className="flex flex-col">
          <DocumentInput title={data.title} id={data._id} />
          <MenuBarComp data={data} />
        </div>
      </div>
      <div className="flex gap-3 items-center">
        <Inbox />
        <Avatars />
        <OrganizationSwitcher
          afterCreateOrganizationUrl={"/"}
          afterLeaveOrganizationUrl="/"
          afterSelectOrganizationUrl={"/"}
          afterSelectPersonalUrl={"/"}
        />
        <UserButton />
      </div>
    </nav>
  );
}
