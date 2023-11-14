import { motion } from 'framer-motion';
import useRandomMessage from '@/StartSlide/hooks/useRandomMessage';

interface UserBirdProps {
  birdSkin: string;
}

const UserBird = ({ birdSkin }: UserBirdProps) => {
  const { message, show, changeMessage } = useRandomMessage();

  return (
    <>
      {show && (
        <motion.div
          className="absolute inset-x-0 -top-12 mx-auto text-center"
          initial={{ opacity: 0, y: '100%' }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
        >
          {message}
        </motion.div>
      )}
      <img
        className="absolute bottom-0 right-0 top-36 z-10 my-auto w-3/4 dark:left-0 dark:-scale-x-100"
        src="/assets/branch.png"
      />
      <motion.div
        onClick={() => changeMessage()}
        className="w-2/5 cursor-pointer"
        whileTap={{ scale: 1.1, transitionDuration: '0.3s' }}
      >
        <img src={birdSkin} />
      </motion.div>
    </>
  );
};

export default UserBird;
