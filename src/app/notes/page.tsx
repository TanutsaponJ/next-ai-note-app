import Note from "@/components/Note";
import prisma from "@/lib/db/prisma";
import { auth } from "@clerk/nextjs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FlowBrain - Notes",
};

export default async function NotePage() {
  const { userId } = auth();

  if (!userId) throw Error("userId undefined");

  const allNote = await prisma.note.findMany({ where: { userId } });

  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {allNote.map((note) => (
        <Note note={note} key={note.id} />
      ))}
      {allNote.length === 0 && (
        <div className="col-span-full text-center">
          {"You don't have any notes yet, Add mew note above..."}
        </div>
      )}
    </div>
  );
}
