import { ReactNode, useState, createContext } from 'react';

export const DateRoomDetailContext = createContext<{
  date: Date;
  selectDate: (value: Date) => void;
}>({
  date: new Date(),
  selectDate: (value: Date) => {
    return value;
  }
});

interface RoomDetailProviderProps {
  children: ReactNode;
  serverTime: Date;
}

const RoomDetailProvider = ({
  children,
  serverTime
}: RoomDetailProviderProps) => {
  const [changedDate, setChangeDate] = useState<Date>(serverTime);

  return (
    <DateRoomDetailContext.Provider
      value={{
        date: changedDate,
        selectDate: (dateValue: Date) => {
          setChangeDate(dateValue);
        }
      }}
    >
      {children}
    </DateRoomDetailContext.Provider>
  );
};

export default RoomDetailProvider;
