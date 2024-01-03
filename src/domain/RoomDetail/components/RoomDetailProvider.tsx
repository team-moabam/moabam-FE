import { ReactNode, useState, createContext } from 'react';

export const DateRoomDetailContext = createContext<{
  chooseDate: Date;
  selectDate: (value: Date) => void;
  serverTime: Date;
  roomCreatedDate: Date;
}>({
  chooseDate: new Date(),
  selectDate: (value: Date) => {
    return value;
  },
  serverTime: new Date(),
  roomCreatedDate: new Date()
});

interface RoomDetailProviderProps {
  children: ReactNode;
  serverTime: Date;
  roomCreatedAt: string;
}

const RoomDetailProvider = ({
  children,
  serverTime,
  roomCreatedAt
}: RoomDetailProviderProps) => {
  const [changedDate, setChangeDate] = useState<Date>(serverTime);

  return (
    <DateRoomDetailContext.Provider
      value={{
        chooseDate: changedDate,
        selectDate: (dateValue: Date) => {
          setChangeDate(dateValue);
        },
        serverTime,
        roomCreatedDate: new Date(roomCreatedAt)
      }}
    >
      {children}
    </DateRoomDetailContext.Provider>
  );
};

export default RoomDetailProvider;
