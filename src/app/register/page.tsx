"use client";
import { useRouter } from "next/navigation";

export default function Register() {
  const router = useRouter();
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

      <form className="mt-6 w-full max-w-md space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500"
          required
        />
        <input
          type="text"
          placeholder="Username"
          className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500"
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500"
          required
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500"
          required
        />

        <div className="flex items-center space-x-2">
          <input type="checkbox" id="terms" className="h-5 w-5" required />
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
        >
          Home
        </button>
      </form>

      <p className="mt-6 text-center text-gray-700 text-sm">
        Already have an account?{" "}
        <a href="#" className="text-teal-600 underline">
          Sign in
        </a>
      </p>
    </div>
  );
}
