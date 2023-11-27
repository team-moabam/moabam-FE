import { Helmet } from 'react-helmet-async';

interface CommonMetaProps {
  pageName: string | undefined;
}

const CommonMeta = ({ pageName }: CommonMetaProps) => {
  return (
    <Helmet>
      <title>모아밤 {pageName ? `: ${pageName}` : ''}</title>
      <meta
        property="og:type"
        content="website"
      />
      <meta
        property="og:title"
        content="Moabam : 그룹 루틴 서비스"
      />
      <meta
        property="og:image"
        content="https://i.ibb.co/gTrKrDv/meta-Image.png"
      />
      <meta
        property="og:description"
        content="귀여운 새와 다함께 루틴을 실천해요!"
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

export default CommonMeta;
