import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

import RoomInfo from '@/Room/RoomInfo';
import RoomNotice from '@/Room/RoomNotice';
import RoomWorkspace from '@/Room/RoomWorkspace';

import { Header } from '@/shared/Header';
import { Icon } from '@/shared/Icon';

const RoomDetail = () => {
  return (
    <div className="relative">
      <Header
        title="물마시기 대작전"
        className="absolute z-[1] text-white"
      >
        <div className="flex">
          <Link
            to="setting"
            className="mr-[1.06rem]"
          >
            <Icon
              icon="MdEdit"
              size="xl"
            />
          </Link>
          <button>
            <Icon
              icon="BiSolidShareAlt"
              size="xl"
            />
          </button>
        </div>
      </Header>
      <RoomNotice content="2일 이상 인증 안하면 칼추방 2일 이상 인증 안하면 칼추방 2일 이상 인증 안하면 칼추방 2일 이상 인증 안하면 칼추방 2일 이상 인증 안하면 칼추방" />
      <div className="h-[20.56rem] bg-[url('/level1.png')] bg-cover bg-no-repeat text-white">
        <RoomInfo />
      </div>
      <div className="px-[1.81rem] pb-[1.62rem] pt-[1.88rem]">
        <RoomWorkspace />
      </div>
    </div>
  );
};

export default RoomDetail;
