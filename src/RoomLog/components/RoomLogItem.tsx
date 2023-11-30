import { RankMember } from '@/core/types/Member';
import { Avatar } from '@/shared/Avatar';
import { Accordion, AccordionHeader, AccordionBody } from '@/shared/Accordion';

type extendedProps = {
  routines: { routineId: number; content: string }[];
  managerNickName: string;
};

type RoomLogItemProps = extendedProps & RankMember;

const RoomLogItem = ({
  contributionPoint,
  profileImage,
  memberId,
  nickname,
  certificationImage,
  routines,
  managerNickName
}: RoomLogItemProps) => {
  return (
    <div className="mb-[1.19rem] flex w-full items-center justify-between peer-invalid:visible">
      <Accordion className="p-0">
        <AccordionHeader className="mb-5 w-full px-7">
          <Avatar
            imgUrl={profileImage}
            userId={memberId}
            nickname={nickname}
            contribution={contributionPoint}
            manager={managerNickName === nickname}
          />
        </AccordionHeader>
        <AccordionBody className="flex justify-center bg-white p-7 py-[1.125rem] dark:bg-dark-sub">
          {certificationImage ? (
            <div className="grid auto-rows-[12rem] grid-cols-[10rem_10rem] gap-x-3 gap-y-[2rem]">
              {certificationImage.images.map(
                ({ routineId: checkRoutineId, image }) => {
                  const routineData = routines.find(
                    ({ routineId }) => routineId === checkRoutineId
                  );

                  return (
                    <div key={checkRoutineId}>
                      <div>
                        <img
                          src={image}
                          className="mb-[0.62rem] h-[10rem] rounded-2xl"
                        />
                      </div>
                      <span className="text-sm">{routineData?.content}</span>
                    </div>
                  );
                }
              )}
            </div>
          ) : (
            <div className="w-[20.75rem]">인증하지 않았어요!</div>
          )}
        </AccordionBody>
      </Accordion>
    </div>
  );
};

export default RoomLogItem;
