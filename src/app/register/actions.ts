"use server";

import { redirect } from 'next/navigation';

export async function signup(formData: FormData) {
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
    confirmPassword: formData.get('confirmPassword') as string,
  };

  if (data.password !== data.confirmPassword) {
    return { error: "Passwords do not match." }; // Returning an error message to be handled in the client.
  }

  redirect('/overview');
}
