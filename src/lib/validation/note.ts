import { z } from "zod";

export const createNoteScheme = z.object({
  title: z.string().min(1, { message: "Title is required" }),
  content: z.string().optional(),
});

export type CreateNoteScheme = z.infer<typeof createNoteScheme>;

export const updateNoteSchema = createNoteScheme.extend({
  id: z.string().min(1),
});

export const deleteNoteSchema = z.object({
  id: z.string().min(1),
});
