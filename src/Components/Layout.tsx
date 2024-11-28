// Layout.tsx
import { Outlet, Link } from 'react-router-dom';
import { HomeIcon } from 'lucide-react';

const Layout = () => {
  return (
    <div>
      <header className='bg-sky-600 text-white p-4 flex items-center'>
        <Link to='/' className='flex items-center'>
          <HomeIcon className='h-6 w-6 mr-2 text-white' />
        </Link>
      </header>

      <main className=''>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
