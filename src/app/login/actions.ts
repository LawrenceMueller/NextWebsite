'use server'

import { redirect } from 'next/navigation'

export async function login(formData: FormData) {

  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  let userNotFound = false;

  if (userNotFound) {
    return { error: "Invalid credentials, or user not found" }; // Returning an error message to be handled in the client.
  }

  redirect('/overview')
}