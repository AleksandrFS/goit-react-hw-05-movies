import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Spinner } from '../Loader';

import css from './Layout.module.css'



const Layout = () => {
  return (
    <div>
      <ul className={css.navigation}>
        <li>
          <NavLink
            className={css.link}
            to="/"
            style={{
              color: '#000000',
              ':active': {
                color: '#5b07f7',
              },
            }}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={css.link} to="/movies">
            Movies
          </NavLink>
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
