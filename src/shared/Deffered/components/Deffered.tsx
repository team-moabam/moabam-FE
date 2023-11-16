import React, { useEffect, useState } from 'react';

interface DefferedProps {
  defferTime?: number;
  children: React.ReactNode;
}

const Deffered = ({ defferTime = 200, children }: DefferedProps) => {
  const [isDeffered, setIsDeffered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsDeffered(true);
    }, defferTime);
    return () => clearTimeout(timer);
  });

  if (!isDeffered) return null;
  return <>{children}</>;
};

export default Deffered;
