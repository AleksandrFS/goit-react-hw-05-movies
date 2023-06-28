import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Spinner } from '../Loader';

import css from './Layout.module.css';

const Layout = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/movies">Movies</NavLink>
        </li>
      </ul>
      <Suspense fallback={<Spinner />}>
        <main>
          <Outlet />
        </main>
      </Suspense>
    </div>
  );
};

export default Layout;
