import { useEffect, useState } from 'react';
import { useTheme } from '@/core/hooks';

const useDayTypes = () => {
  const { theme } = useTheme();
  const DAY_TYPES =
    theme === 'dark'
      ? (['NIGHT', 'MORNING'] as const)
      : (['MORNING', 'NIGHT'] as const);

  const [dayType, setDayType] = useState(DAY_TYPES[0]);
  const toggleDayType = () => {
    setDayType((prev) => (prev === 'MORNING' ? 'NIGHT' : 'MORNING'));
  };

  useEffect(() => {
    setDayType(theme === 'dark' ? 'NIGHT' : 'MORNING');
  }, [theme]);

  return { DAY_TYPES, toggleDayType, dayType };
};

export default useDayTypes;
