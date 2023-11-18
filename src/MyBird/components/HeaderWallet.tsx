import { useEffect } from 'react';
import { useContextSelector } from 'use-context-selector';
import { BiSolidBugAlt } from 'react-icons/bi';
import { MyBirdContext } from '../contexts/MyBirdContext';

const HeaderWallet = () => {
  const bugs = useContextSelector(MyBirdContext, (state) => state.bugs);

  useEffect(() => {
    console.log('HeaderWallet');
    console.log(bugs);
  });
  return (
    <>
      <div className="flex gap-3 rounded-full border-2 border-dark-gray bg-[rgba(1,1,1,0.5)] px-3 py-1">
        {bugArray.map((bug) => (
          <div
            className={`flex items-center gap-2 ${bugColor[bug]}`}
            key={bug}
          >
            <BiSolidBugAlt />
            <h1>{bugs[bug]}</h1>
          </div>
        ))}
      </div>
    </>
  );
};

export default HeaderWallet;

const bugArray: ('morningBug' | 'nightBug' | 'goldenBug')[] = [
  'morningBug',
  'nightBug',
  'goldenBug'
];

const bugColor = {
  morningBug: 'text-light-point',
  nightBug: 'text-dark-point',
  goldenBug: 'text-warning'
};
