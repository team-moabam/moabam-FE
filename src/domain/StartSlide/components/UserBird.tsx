import { motion } from 'framer-motion';
import useRandomMessage from '@/domain/StartSlide/hooks/useRandomMessage';

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
