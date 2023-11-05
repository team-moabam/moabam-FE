import { FaLock } from 'react-icons/fa';

interface BirdItemProps {
  isLock: boolean;
  name: string;
  image: string;
  isSelect: boolean;
}

const BirdItem = ({ isLock = false, name, image, isSelect }: BirdItemProps) => {
  return (
    <>
      <div
        className={`relative mb-2 aspect-[3/4] overflow-hidden rounded-2xl bg-light-sub ${
          isSelect && 'border-4 border-light-point dark:border-light-point'
        }`}
      >
        <img
          src={image}
          alt=""
          className="absolute h-full object-cover"
        />
        {isLock && (
          <div className="absolute grid h-full w-full place-content-center bg-[rgba(1,1,1,0.5)] text-white">
            <FaLock size="35" />
            <div className="absolute bottom-1 right-2 text-xl font-extrabold text-light-point">
              25
            </div>
          </div>
        )}
      </div>
      <div>{name}</div>
    </>
  );
};

export default BirdItem;
