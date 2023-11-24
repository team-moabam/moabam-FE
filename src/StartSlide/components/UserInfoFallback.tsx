import React from 'react';

interface UserInfoFallbackProps {
  type: 'MORNING' | 'NIGHT';
}

const CONTENTS = {
  MORNING: {
    skin: '/assets/skins/awakeOmokSkin0.png',
    bird: '오목눈이'
  },
  NIGHT: {
    skin: '/assets/skins/awakeOwlSkin0.png',
    bird: '부엉이'
  }
};

const UserInfoFallback = ({ type }: UserInfoFallbackProps) => {
  return (
    <div className="absolute h-full w-full animate-pulse overflow-hidden text-white">
      <div className="absolute inset-y-0 m-auto flex h-fit flex-col items-center justify-center">
        <div className="absolute inset-x-0 -top-12 left-1 mx-auto text-center">
          {CONTENTS[type].bird} 오는 중 ..
        </div>
        <div className="w-2/5 cursor-pointer">
          <img
            src={CONTENTS[type].skin}
            className="opacity-50 brightness-0"
          />
        </div>
      </div>
    </div>
  );
};

export default UserInfoFallback;
