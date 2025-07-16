import { db } from "@/lib/firebase"
import { doc, updateDoc, deleteDoc } from "firebase/firestore"
import { NextRequest, NextResponse } from "next/server"

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params
  const body = await req.json()
  await updateDoc(doc(db, "news", id), body)
  return NextResponse.json({ message: "Updated" })
}

export async function DELETE(_: Request, { params }: { params: { id: string } }) {
  const { id } = params
  await deleteDoc(doc(db, "news", id))
  return NextResponse.json({ message: "Deleted" })
}
