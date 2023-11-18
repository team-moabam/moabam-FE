import { useEffect } from 'react';
import { useContextSelector } from 'use-context-selector';
import { MyBirdContext } from '../contexts/myBirdContext';

interface MyBirdThumbnailProps {
  type: 'MORNING' | 'NIGHT';
  bgImage: string;
}

const MyBirdThumbnail = ({ type, bgImage }: MyBirdThumbnailProps) => {
  const { selectItem } = useContextSelector(MyBirdContext, (state) => state);

  useEffect(() => {
    console.log('MyBirdThumbnail');
  }, []);
  return (
    <div className="relative mb-5 aspect-video w-full overflow-hidden">
      <img
        src={bgImage}
        className="absolute w-full object-cover"
      />
      {selectItem && (
        <div className="absolute bottom-[15%] left-[15%] h-20 w-20">
          <img src={selectItem[type]?.image} />
        </div>
      )}
    </div>
  );
};

export default MyBirdThumbnail;
