// src/shared/config/firebase.ts
import { initializeApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCGh_oiTcQH7NrrwLL_VdPEOzcgXS0qCcg",
  authDomain: "js-vibe-coding.firebaseapp.com",
  projectId: "js-vibe-coding",
  storageBucket: "js-vibe-coding.firebasestorage.app",
  messagingSenderId: "1032116488263",
  appId: "1:1032116488263:web:8eba8fe773f9266097c962",
  measurementId: "G-DJNC1F8KB0"
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export const db = getFirestore(app);
export const auth = getAuth(app);
