import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { useCore } from '@/core/hooks/useCore';
import { testStore } from '@/core/store/testStore';
import { coreConstants } from './core/constants/coreConstants';
import { coreUtil } from './core/utils/coreUtil';

import useModal from '@/shared/modal/hooks/useModal';
import useTab from './shared/tab/hooks/useTab';

import { usePet } from '@/user/hooks/usePet';
import { useUser } from './user/hooks/useUser';

import Tab from '@/shared/tab';
import Modal from './shared/modal';
import UserComponent from '@/user/components/UserComponent';
import TestPage from '@/pages/TestPage';

import { ModalType } from './shared/modal/types/modalType';
import { coreType } from '@/core/types/coreType';
import { UserType } from './user/types/userType';

const App = () => {
  return <></>;
};

export default App;
