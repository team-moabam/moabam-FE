import { Icon } from '../Icon';

interface ProfileProps {
  imgUrl: string;
  certified?: boolean;
}

const Profile = ({ imgUrl, certified = false }: ProfileProps) => {
  return (
    <div className="relative pr-[16px]">
      <img
        src={imgUrl}
        className="h-[50px] w-[50px] rounded-full"
      />
      {certified ? (
        <div className="absolute bottom-0 right-[0.9rem] flex h-4 w-4 items-center justify-center rounded-full bg-light-point dark:bg-dark-point">
          <Icon
            icon="FaCheck"
            size="xs"
            className="text-[0.8rem] text-white"
          />
        </div>
      ) : null}
    </div>
  );
};

export default Profile;
