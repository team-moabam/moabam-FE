import { Helmet } from 'react-helmet-async';

interface CommonMetaProps {
  pageName: string | undefined;
}

const CommonMeta = ({ pageName }: CommonMetaProps) => {
  return (
    <Helmet>
      <title>모아밤 {pageName ? `: ${pageName}` : ''}</title>
    </Helmet>
  );
};

export default CommonMeta;
