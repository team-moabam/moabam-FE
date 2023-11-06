import { Avatar } from '@/shared/Avatar';
import { Icon } from '@/shared/Icon';

const RoomMembers = () => {
  return (
    <div className="mt-[2.87rem]">
      <div className="mb-[1.19rem] flex items-center justify-between">
        <Avatar
          imgUrl="https://picsum.photos/200"
          userId="123"
          nickname="볼록눈이"
          contribution={65}
        />
        <button className="btn dark:btn-dark-point btn-light-point flex h-[1.875rem] w-[4.37rem] items-center rounded-[0.5rem] p-0  px-[0.56rem] font-IMHyemin-bold text-sm">
          <Icon
            icon="BiSolidHandRight"
            size="lg"
            className="mr-[0.7rem]"
          />
          콕!
        </button>
      </div>
      <div className="mb-[1.19rem] flex items-center justify-between">
        <Avatar
          imgUrl="https://picsum.photos/200"
          userId="123"
          nickname="볼록눈이"
          contribution={65}
        />
        <span className="block h-[1.875rem] w-[4.37rem] text-center text-sm text-light-point dark:text-dark-point">
          루틴 완료!
        </span>
      </div>
      <div className="mb-[1.19rem] flex items-center justify-between">
        <Avatar
          imgUrl="https://picsum.photos/200"
          userId="123"
          nickname="볼록눈이"
          contribution={65}
        />
        <button className="btn btn-disabled h-[1.875rem] w-[4.37rem] rounded-[0.5rem] p-0 font-IMHyemin-bold text-sm">
          내일 다시
        </button>
      </div>
    </div>
  );
};

export default RoomMembers;
