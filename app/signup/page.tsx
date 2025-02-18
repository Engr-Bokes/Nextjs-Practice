// app/signup/page.tsx
'use client'; // Mark as a Client Component
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { saveUser } from '@/app/lib/actions'; // Import the saveUser function
import AcmeLogo from '@/app/ui/acme-logo';

export default function SignUpPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !password) {
      setError('Please fill in all fields.');
      return;
    }

    try {
      await saveUser({ name, email, password }); // Call the saveUser function
      router.push('/login'); // Redirect to login page after successful sign-up
    } catch (err) {
      setError('Failed to create an account. Please try again.');
    }
  };

  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        <div className="flex h-20 w-full items-end rounded-lg bg-blue-500 p-3 md:h-36">
          <div className="w-32 text-white md:w-36">
            <AcmeLogo />
          </div>
        </div>
        <form onSubmit={handleSignUp} className="space-y-3">
          <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
            <h1 className="mb-3 text-2xl font-bold">Sign Up</h1>
            {error && <p className="text-red-500">{error}</p>}
            <div className="w-full">
              <label htmlFor="name" className="mb-3 mt-5 block text-xs font-medium text-gray-900">
                Name
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-2 text-sm outline-2 placeholder:text-gray-500"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="w-full">
              <label htmlFor="email" className="mb-3 mt-5 block text-xs font-medium text-gray-900">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-2 text-sm outline-2 placeholder:text-gray-500"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="w-full">
              <label htmlFor="password" className="mb-3 mt-5 block text-xs font-medium text-gray-900">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-2 text-sm outline-2 placeholder:text-gray-500"
                placeholder="Enter your password"
                required
              />
            </div>
            <button
              type="submit"
              className="mt-4 w-full rounded-lg bg-blue-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-400"
            >
              Sign Up
            </button>
            <p className="mt-4 text-center text-sm text-gray-600">
              Already have an account?{' '}
              <a href="/login" className="text-blue-500 hover:underline">
                Log in
              </a>
            </p>
          </div>
        </form>
      </div>
    </main>
  );
}