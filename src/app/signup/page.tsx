// src/app/(pages)/signup/page.tsx
'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  authSchema,
  AuthFormValues,
  signUpUser,
} from '@/features/auth/authService';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Link from 'next/link';
import { FirebaseError } from 'firebase/app';

export default function SignUpPage() {
  const router = useRouter();
  const [firebaseError, setFirebaseError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<AuthFormValues>({
    resolver: zodResolver(authSchema),
  });

  const onSubmit: SubmitHandler<AuthFormValues> = async (data) => {
    setFirebaseError(null);
    try {
      await signUpUser(data);
      router.push('/mashups'); // Перенаправляем после успешной регистрации
    } catch (error) {
      if (error instanceof FirebaseError) {
        setFirebaseError(error.message);
      } else {
        setFirebaseError('An unexpected error occurred.');
      }
    }
  };

  return (
    <div className="container mx-auto p-4 max-w-sm">
      <h1 className="text-3xl font-bold mb-6 text-center">Create Account</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {firebaseError && (
          <p className="text-red-500 bg-red-100 p-3 rounded-md">
            {firebaseError}
          </p>
        )}
        {/* Поля формы идентичны странице Sign In */}
        <div>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" {...register('email')} />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input id="password" type="password" {...register('password')} />
          {errors.password && <p>{errors.password.message}</p>}
        </div>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Creating Account...' : 'Sign Up'}
        </button>
      </form>
      <p className="mt-4 text-center text-sm">
        Already have an account?{' '}
        <Link
          href="/signin"
          className="font-medium text-indigo-600 hover:underline"
        >
          Sign in
        </Link>
      </p>
    </div>
  );
}
