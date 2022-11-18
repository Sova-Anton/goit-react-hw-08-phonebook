import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { BarApp } from 'components/AppBar/AppBar';


export const Layout = () => {
  return (
    <>
      <BarApp />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};
