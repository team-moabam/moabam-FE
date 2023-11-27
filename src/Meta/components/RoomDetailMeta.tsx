import { Helmet } from 'react-helmet-async';

interface RoomDetailMetaProps {
  roomTitle: string;
}

const RoomDetailMeta = ({ roomTitle }: RoomDetailMetaProps) => {
  return (
    <Helmet>
      <title>모아밤 : {roomTitle}</title>
      <meta
        property="og:type"
        content="website"
      />
      <meta
        property="og:title"
        content={`'${roomTitle}' 에 초대합니다!`}
      />
      <meta
        property="og:image"
        content="https://i.ibb.co/gTrKrDv/meta-Image.png"
      />
      <meta
        property="og:description"
        content="귀여운 새와 함께 루틴을 실천해요!"
      />
      <meta
        property="og:site_name"
        content="Moabam"
      />
      <meta
        property="og:image:width"
        content="1200"
      />
      <meta
        property="og:image:height"
        content="630"
      />
    </Helmet>
  );
};

export default RoomDetailMeta;
