'use client'
import { MenuIcon } from "lucide-react";
import NewDocumentButton from "./utilities/NewDocumentButton";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";

const Sidebar = () => {
  const menuOptions = (
    <>
      <NewDocumentButton />

      {/* my documents  */}
      {/* list... */}

      {/* shared with me */}
      {/* list... */}
    </>
  );

  return (
    <div className="p-2 md:p-4 bg-gray-200 relative">
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger>
            <MenuIcon/>
          </SheetTrigger>
          <SheetContent side={"left"}>
            <SheetHeader>
              {menuOptions} 
              {/* <SheetTitle>Are you absolutely sure?</SheetTitle>
              <SheetDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </SheetDescription> */}
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
      <div className="hidden md:inline">
        <NewDocumentButton />
      </div>
    </div>
  );
};
export default Sidebar;
