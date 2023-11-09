import { useState } from 'react';
import { MdModeEdit } from 'react-icons/md';

interface UserProfileProps {
  nickname: string;
  intro: string;
}

const UserProfile = ({ nickname, intro }: UserProfileProps) => {
  const [profileData, setProfileData] = useState({ nickname, intro });

  // const handleImageChange = (e) => {
  //   console.log(e.target.files[0]);
  // };

  return (
    <>
      <div className="absolute right-5 cursor-pointer text-3xl text-dark-gray hover:text-black dark:hover:text-white">
        <MdModeEdit />
      </div>
      <div className="flex flex-col items-center">
        <div className="relative h-28 w-28 overflow-hidden rounded-full">
          <img
            src="https://storage.enuri.info/pic_upload/knowbox2/202005/08362910620200507cd5549b2-9c1f-4447-aa00-72645ae3a069.jpg"
            alt=""
            className="absolute h-full w-full object-cover"
          />
          <div className="absolute h-full w-full bg-[rgba(1,1,1,0.5)]"></div>
        </div>
        <div className="my-2 text-xl">{profileData.nickname}</div>
        <div className="text-dark-gray">{profileData.intro}</div>
        {/* <button
          onClick={() => {
            setProfileData({ nickname: '바보', intro: '멍청이' });
          }}
        >
          바꾸기
        </button>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />{' '} */}
      </div>
    </>
  );
};

export default UserProfile;
