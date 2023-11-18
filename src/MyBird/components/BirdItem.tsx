import { FaLock } from 'react-icons/fa';
import { BiSolidBugAlt } from 'react-icons/bi';
import { ItemType } from '../types/item';

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
        className={`relative mb-2 aspect-[3/4] overflow-hidden rounded-2xl bg-light-sub transition-all ${
          isSelect && 'border-4 border-light-point dark:border-dark-point'
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
            <div className="absolute bottom-2 right-3  gap-1 text-xl font-extrabold">
              {bugPrice === 0 && goldenBugPrice === 0 ? (
                <h1>Lv {level}</h1>
              ) : (
                <>
                  <div
                    className={`flex items-center gap-1 font-extrabold ${
                      type === 'MORNING'
                        ? 'text-light-point'
                        : 'text-dark-point'
                    }`}
                  >
                    <BiSolidBugAlt />
                    <h1>{bugPrice}</h1>
                  </div>
                  <div className="flex items-center gap-1 font-extrabold text-warning">
                    <BiSolidBugAlt />
                    <h1>{goldenBugPrice}</h1>
                  </div>
                </>
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
