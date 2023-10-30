interface AvatarProps {
  imgUrl: string;
  contribution: number;
  nickname: string;
  manager?: boolean;
}

const Avatar = ({ imgUrl, contribution, nickname, manager }: AvatarProps) => {
  return (
    <div className="flex items-center">
      <div className="pr-[16px]">
        <img
          src={imgUrl}
          className="h-[50px] w-[50px] rounded-full"
        />
      </div>
      <div className="flex flex-col text-[14px] leading-[1.6rem]">
        <div className="flex items-center">
          <span className="font-IMHyemin-bold text-black">{nickname}</span>

          {manager && (
            <div className="ml-[.5625rem] h-[1.25rem] w-[1.25rem] bg-[url('/icons/icon-crown.png')] bg-contain bg-center bg-no-repeat" />
          )}
        </div>
        <span className="text-darkGray">기여도 : {contribution}점</span>
      </div>
    </div>
  );
};

export default Avatar;
