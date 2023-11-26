import { ReactNode, useState, createContext } from 'react';

export const DateRoomDetailContext = createContext<{
  chooseDate: Date;
  selectDate: (value: Date) => void;
  serverTime: Date;
}>({
  chooseDate: new Date(),
  selectDate: (value: Date) => {
    return value;
  },
  serverTime: new Date()
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
        chooseDate: changedDate,
        selectDate: (dateValue: Date) => {
          setChangeDate(dateValue);
        },
        serverTime
      }}
    >
      {children}
    </DateRoomDetailContext.Provider>
  );
};

export default RoomDetailProvider;
