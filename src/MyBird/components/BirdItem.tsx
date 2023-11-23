import { FaLock } from 'react-icons/fa';
import { BiSolidBugAlt } from 'react-icons/bi';
import { ItemType } from '@/core/types';

interface BirdItemProps {
  isLock?: boolean;
  isSelect?: boolean;
  birdItem: ItemType;
}

const BirdItem = ({
  isLock = false,
  isSelect = false,
  birdItem
}: BirdItemProps) => {
  const { bugPrice, image, name, type, level, goldenBugPrice } = birdItem;

  return (
    <>
      <div
        className={`relative mb-2 grid aspect-[3/4] place-content-center overflow-hidden rounded-2xl bg-light-sub transition-all dark:bg-dark-sub ${
          isSelect && 'border-4 border-light-point dark:border-dark-point'
        }`}
      >
        <img
          src={image}
          className="absolute left-1/2 top-1/2 w-[70%] -translate-x-1/2 -translate-y-1/2"
        />
        {isLock && (
          <div className="absolute h-full w-full bg-[rgba(1,1,1,0.5)] text-white">
            <div className="absolute right-[5%] top-[5%]">
              <FaLock size="25" />
            </div>

            <div className="absolute bottom-2 right-3 flex flex-col items-end text-xl font-extrabold">
              {level !== 0 && <h1>Lv {level}</h1>}
              {bugPrice !== 0 && (
                <div
                  className={`flex items-center gap-1 font-extrabold ${
                    type === 'MORNING' ? 'text-light-point' : 'text-dark-point'
                  }`}
                >
                  <BiSolidBugAlt />
                  <h1>{bugPrice}</h1>
                </div>
              )}
              {goldenBugPrice !== 0 && (
                <div className="flex items-center gap-1 font-extrabold text-warning">
                  <BiSolidBugAlt />
                  <h1>{goldenBugPrice}</h1>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
      <div>{name}</div>
    </>
  );
};

export default BirdItem;
