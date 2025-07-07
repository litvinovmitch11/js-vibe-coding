// src/app/(pages)/signin/page.tsx
'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  authSchema,
  AuthFormValues,
  signInUser,
} from '@/features/auth/authService';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Link from 'next/link';
import { FirebaseError } from 'firebase/app';

export default function SignInPage() {
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
      await signInUser(data);
      router.push('/mashups'); // Перенаправляем на страницу мэшапов после входа
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
      <h1 className="text-3xl font-bold mb-6 text-center">Sign In</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {firebaseError && (
          <p className="text-red-500 bg-red-100 p-3 rounded-md">
            {firebaseError}
          </p>
        )}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            {...register('email')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            {...register('password')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          />
          {errors.password && (
            <p className="text-red-500 text-xs mt-1">
              {errors.password.message}
            </p>
          )}
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex justify-center py-2 px-4 border rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-400"
        >
          {isSubmitting ? 'Signing In...' : 'Sign In'}
        </button>
      </form>
      <p className="mt-4 text-center text-sm">
        Don&#39t have an account?{' '}
        <Link href="/signup" className="font-medium text-indigo-600 hover:underline">
          Sign up
        </Link>
      </p>
    </div>
  );
}
