// src/entities/mashup/api/mashupService.ts
import { db } from '@/shared/config/firebase';
import {
  collection,
  getDocs,
  doc,
  getDoc,
  addDoc,
  serverTimestamp,
} from 'firebase/firestore';
import type { Mashup } from '../model';
import type { MashupFormValues } from '../model/schema';

const mashupsCollection = collection(db, 'mashups');

export const createMashup = async (data: MashupFormValues) => {
  const docRef = await addDoc(mashupsCollection, {
    ...data,
    createdAt: serverTimestamp(),
  });
  return docRef.id;
};

export const getMashups = async (): Promise<Mashup[]> => {
  const snapshot = await getDocs(mashupsCollection);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }) as Mashup);
};

export const getMashupById = async (id: string): Promise<Mashup | null> => {
  const docRef = doc(db, 'mashups', id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() } as Mashup;
  }
  return null;
};
