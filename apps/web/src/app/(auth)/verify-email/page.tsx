'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function VerifyEmailPage() {
  const router = useRouter();
  const [code, setCode] = useState('');

  return (
    <form className="w-full" onSubmit={(e) => { e.preventDefault(); router.push('/otp'); }}>
      <label htmlFor="code" className="mt-6 block text-sm font-medium text-heading">Verification Code</label>
      <input
        id="code"
        type="text"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        required
        className="mt-1 w-full rounded-md border border-stroke-grey px-3 py-2"
      />
      <button type="submit" className="mt-6 w-full rounded-md bg-primary px-4 py-2 text-white">Continue</button>
    </form>
  );
}
