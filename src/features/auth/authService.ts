// src/features/auth/authService.ts
import { auth } from '@/shared/config/firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { z } from 'zod';

// Схема валидации для форм входа и регистрации
export const authSchema = z.object({
  email: z.string().email('Please enter a valid email address.'),
  password: z
    .string()
    .min(6, 'Password must be at least 6 characters long.'),
});

export type AuthFormValues = z.infer<typeof authSchema>;

// Функция для регистрации
export const signUpUser = async ({ email, password }: AuthFormValues) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

// Функция для входа
export const signInUser = async ({ email, password }: AuthFormValues) => {
  return signInWithEmailAndPassword(auth, email, password);
};
