'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function OtpPage() {
  const router = useRouter();
  const [otp, setOtp] = useState('');

  return (
    <form className="w-full" onSubmit={(e) => { e.preventDefault(); router.push('/'); }}>
      <label htmlFor="otp" className="mt-6 block text-sm font-medium text-heading">OTP</label>
      <input
        id="otp"
        type="text"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        required
        className="mt-1 w-full rounded-md border border-stroke-grey px-3 py-2"
      />
      <button type="submit" className="mt-6 w-full rounded-md bg-primary px-4 py-2 text-white">Continue</button>
    </form>
  );
}
