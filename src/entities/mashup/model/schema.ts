// src/entities/mashup/model/schema.ts
import { z } from 'zod';

export const mashupSchema = z.object({
  title: z.string().min(5, 'Title must be at least 5 characters long'),
  author: z.string().min(2, 'Author name is required'),
  description: z
    .string()
    .max(500, 'Description cannot exceed 500 characters')
    .optional(),
  isExplicit: z.boolean().default(false),
});

export type MashupFormValues = z.infer<typeof mashupSchema>;
