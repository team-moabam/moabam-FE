import React from 'react';
import { Header } from '@/shared/Header';
import Navbar from '../components/Navbar';

const PageTemplate = ({ children }: React.PropsWithChildren) => {
  return (
    <div className="flex h-full flex-col">
      <Header prev="#" />
      <main className="grow px-8 py-12">{children}</main>
      <Navbar />
    </div>
  );
};

export default PageTemplate;
