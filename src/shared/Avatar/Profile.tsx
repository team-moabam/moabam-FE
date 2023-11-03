interface ProfileProps {
  imgUrl: string;
}

const Profile = ({ imgUrl }: ProfileProps) => {
  return (
    <div className="pr-[16px]">
      <img
        src={imgUrl}
        className="h-[50px] w-[50px] rounded-full"
      />
    </div>
  );
};

export default Profile;
