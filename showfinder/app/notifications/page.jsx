import Notifications from '@/components/notifications/Notifications';
import Header from '@/components/header/Header';
import Menu from '@/components/menu/Menu';

import React from 'react';
import { SearchProvider } from '@/context/SearchProvider';
import { UserProvider } from '@/context/UserProvider';

const page = () => {
  return (
    <SearchProvider>
      <UserProvider>
        <Header />
        <div className="layoutContainer">
          <Menu />
          <Notifications />
        </div>
      </UserProvider>
    </SearchProvider>
  );
};

export default page;
