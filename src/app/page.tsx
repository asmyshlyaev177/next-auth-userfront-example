import { UserActions } from './UserActions';
import { Restricted } from './Restricted';

export default function Home() {
  return (
    <main className="grid grid-cols-1 auto-rows-min min-h-screen gap-8 p-24 relative test0">
      <header className='right-0 top-0 mt-4 mr-4 absolute'>
        <UserActions />
      </header>

      <div className="z-10 w-full max-w-5xl font-mono text-sm lg:flex">
        Some text for guests
      </div>

      <Restricted>
        Some text only for authorized users
      </Restricted>
    </main>
  );
}
