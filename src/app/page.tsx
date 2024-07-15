import Link from 'next/link'

import { LogoutBtn } from './LogoutBtn';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        Some text for guests

        <div className='flex flex-col gap-4'>
          <Link href="/login">Log in</Link>
          <Link href="/signup">Sign up</Link>
          <LogoutBtn />
        </div>

      </div>

    </main>
  );
}
