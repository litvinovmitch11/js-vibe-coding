// src/entities/mashup/model/index.ts
export interface Mashup {
  id: string;
  title: string;
  author: string;
  description: string;
  isExplicit: boolean;
  createdAt: number; // timestamp
}
