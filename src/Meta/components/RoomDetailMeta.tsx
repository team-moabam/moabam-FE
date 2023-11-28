import { Helmet } from 'react-helmet-async';

interface RoomDetailMetaProps {
  roomTitle: string;
}

const RoomDetailMeta = ({ roomTitle }: RoomDetailMetaProps) => {
  return (
    <Helmet>
      <title>모아밤 : {roomTitle}</title>
    </Helmet>
  );
};

export default RoomDetailMeta;
