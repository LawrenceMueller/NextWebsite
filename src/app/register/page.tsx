"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signup } from "./actions";

export default function Register() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null); // Clear previous errors

    const formData = new FormData(event.currentTarget);
    const result = await signup(formData);

    if (result?.error) {
      setError(result.error); // Display error message if any
    } else {
      router.push("/overview"); // Redirect on success
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50 p-4">
      <div className="relative w-full max-w-md">
        <div>
          <div className="text-center">
            <p className="text-2xl font-semibold text-gray-900">
              Create an Account
            </p>
            <p className="text-gray-600 mt-2">Join us today!</p>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="mt-6 w-full max-w-md space-y-4">
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500"
          required
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500"
          required
        />
        <input
          type="password"
          placeholder="Confirm Password"
          name="confirmPassword"
          className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500"
          required
        />

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <div className="flex items-center space-x-2">
          <input type="checkbox" name="terms" className="h-5 w-5" required />
          <label htmlFor="terms" className="text-gray-700 text-sm">
            I agree to the{" "}
            <a href="#" className="text-teal-600 underline">
              Privacy Policy
            </a>{" "}
            and{" "}
            <a href="#" className="text-teal-600 underline">
              Terms of Service
            </a>
            .
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-teal-600 text-white py-3 rounded-lg hover:bg-teal-700"
        >
          Sign Up
        </button>
        <button
          onClick={() => router.push("/")}
          className="w-full mt-3 border border-teal-600 text-teal-600 py-3 rounded-lg hover:bg-teal-50"
          type="button"
        >
          Home
        </button>
      </form>
    </div>
  );
}
