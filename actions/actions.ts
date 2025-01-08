"use server";

import { adminDb } from "@/firebase-admin";
import { auth } from "@clerk/nextjs/server";

export async function createNewDocument() {
    console.log("console log: createNewDocument");
  auth.protect();

  const { sessionClaims } = await auth();
  console.debug("Fetched session claims:", sessionClaims);

  const docCollectorRef = adminDb.collection("documents");
  const docRef = await docCollectorRef.add({
    title: "New untitled doc title",
  });

  await adminDb
    .collection("users")
    .doc(sessionClaims?.email)
    .collection("rooms")
    .doc(docRef.id)
    .set({
      userId: sessionClaims?.email,
      role: "owner",
      createdAt: new Date(),
      roomId: docRef.id,
    });

    return { docId: docRef.id };
}
