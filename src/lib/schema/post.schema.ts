import z from "zod";

export const PostSchema = z.object({
  title: z.string().min(1, "Title must not be empty"),
  text: z.string().min(1, "Text must not be empty"),
  slug: z.string(),
  category_id: z.string(),
  userId: z.string(),
});

export const PostUpdateSchema = z.object({
  title: z.string().min(1, "Title must not be empty"),
  text: z.string().min(1, "Text must not be empty"),
  slug: z.string(),
  category_id: z.string(),
  userId: z.string(),
});

export type PostInput = z.TypeOf<typeof PostSchema>;
export type PostUpdateInput = z.TypeOf<typeof PostUpdateSchema>;