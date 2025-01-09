'use client'

import Document from "@/components/Document"

const DocumentPage = ({ params: {id} } : {
    params: {id: string}
}) => {
    console.log("Props received are: ", id)
  return (
    <div className="flex flex-1 flex-col min-h-screen">
        <Document id={id}/>
    </div>
  )
}
export default DocumentPage