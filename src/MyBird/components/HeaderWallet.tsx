import { useEffect } from 'react';
import { useContextSelector } from 'use-context-selector';
import { MyBirdContext } from '../contexts/myBirdContext';

const HeaderWallet = () => {
  const bugs = useContextSelector(MyBirdContext, (state) => state.bugs);
  const setBugs = useContextSelector(MyBirdContext, (state) => state.setBugs);

  useEffect(() => {
    console.log('HeaderWallet');
    console.log(bugs);
  });
  return (
    <>
      <button
        onClick={() =>
          setBugs({
            morningBug: 4,
            nightBug: 300,
            goldenBug: 100
          })
        }
      >
        ddddddd
      </button>
    </>
  );
};

export default HeaderWallet;
