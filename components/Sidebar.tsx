"use client";
import { MenuIcon } from "lucide-react";
import NewDocumentButton from "./utilities/NewDocumentButton";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "@/firebase";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useUser } from "@clerk/nextjs";
import {
  collectionGroup,
  DocumentData,
  query,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import SidebarOptions from "./SidebarOptions";

interface RoomDocument extends DocumentData {
  createdAt: string;
  role: "owner" | "editor" | "viewer";
  roomId: string;
  userId: string;
}

const Sidebar = () => {
  const { user } = useUser();
  const [groupedData, setGroupedData] = useState<{
    owner: RoomDocument[];
    editor: RoomDocument[];
  }>({
    owner: [],
    editor: [],
  });

  const [data, loading, error] = useCollection(
    user &&
      query(
        collectionGroup(db, "rooms"),
        where("userId", "==", user?.emailAddresses[0].toString())
      )
  );

  useEffect(() => {
    console.log("data =>> ",data)
    if (!data) {
      console.log("data not found")
      return;
    }

    const groupedData = data.docs.reduce<{
      owner: RoomDocument[];
      editor: RoomDocument[];
    }>(
      (acc, curr) => {
        const roomData = curr.data() as RoomDocument;

        if (roomData.role === "owner") {
          acc.owner.push({
            id: curr.id,
            ...roomData,
          });
        } else if (roomData.role === "editor") {
          acc.editor.push({
            id: curr.id,
            ...roomData,
          });
        }

        return acc;
      },
      {
        owner: [],
        editor: [],
      }
    );

    setGroupedData(groupedData);
  }, [data]);

  const menuOptions = (
    <div className="w-52">
      <NewDocumentButton />

      <div className="flex mt-4 flex-col space-y-2 md:max-w-36">
        {/* my documents  */}
        {/* list... */}
        {groupedData.owner.length === 0 ? (
          <h1>No documents found.</h1>
        ) : (
          <div className="">
            <h2 className="text-gray-500 font-semibold text-sm">Documents</h2>
            <div>
              {groupedData.owner.map((doc) => (
                <SidebarOptions key={doc.id} href={`/doc/${doc.id}`} id={doc.id} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* shared with me */}
      {/* list... */}
    </div>
  );

  return (
    <div className="p-2 md:p-4 bg-gray-200 relative">
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger>
            <MenuIcon />
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
        {menuOptions}
      </div>
    </div>
  );
};
export default Sidebar;
