import { FormEvent, useEffect, useState, useTransition } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { useDocumentData } from "react-firebase-hooks/firestore";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "@/firebase";

function Document({id} : {id: string}) {

    const [data, loading, error] = useDocumentData(doc(db, "documents", id));
    const [inputTitle, setInputTitle] = useState("");
    const [isUpdating, startTransition] = useTransition();

    const changeTitle = (e: FormEvent) => {
        e.preventDefault();

        if(inputTitle.trim()){
            startTransition( async () => {
                await updateDoc(doc(db, "documents", id), {
                    title: inputTitle,
                })
            })
        }
    }

    useEffect( () => {
        if(data){
            setInputTitle(data.title);
        }
    }, [data]);

  return (
    <div className="">
        <div className="flex max-w-6xl mx-auto justify-between pb-6 flex-1">
            <form onSubmit={changeTitle} className="flex flex-1 space-x-2">
                {/* update title */}
                <Input type="text" onChange={(e) => {setInputTitle(e.target.value)}} value={inputTitle} />
                <Button type="submit" disabled={isUpdating}>
                    {isUpdating ? "Updating..." : "Update"}
                </Button>

                {/* if isOwner -> ability to "invite users" and "delete document" */}
            </form>
        </div>

        <div>
            {/* manage users */}
            {/* avatars */}
        </div>

        {/* Collaborative Editor [ Special Feature ] */}
    </div>
  )
}
export default Document