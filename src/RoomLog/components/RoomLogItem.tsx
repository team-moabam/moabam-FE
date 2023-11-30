import { RankMember } from '@/core/types/Member';
import { Avatar } from '@/shared/Avatar';
import { Accordion, AccordionHeader, AccordionBody } from '@/shared/Accordion';

type extendedProps = {
  routines: { routineId: number; content: string }[];
};

type RoomLogItemProps = extendedProps & RankMember;

const RoomLogItem = ({
  contributionPoint,
  profileImage,
  memberId,
  nickname,
  certificationImage,
  routines
}: RoomLogItemProps) => {
  return (
    <div className="mb-[1.19rem] flex w-full items-center justify-between peer-invalid:visible">
      <Accordion>
        <AccordionHeader className="w-full">
          <Avatar
            imgUrl={profileImage}
            userId={memberId}
            nickname={nickname}
            contribution={contributionPoint}
          />
        </AccordionHeader>
        <AccordionBody>
          <div className="grid auto-rows-[12rem] grid-cols-[10rem_10rem] gap-x-3 gap-y-[1.32rem] px-[1.19rem] py-7">
            {certificationImage ? (
              certificationImage.images.map(
                ({ routineId: checkRoutineId, image }) => {
                  const routineData = routines.find(
                    ({ routineId }) => routineId === checkRoutineId
                  );
                  return (
                    <div key={checkRoutineId}>
                      <div>
                        <img
                          src={image}
                          className="h-[10rem] rounded-2xl"
                        />
                      </div>
                      <span>{routineData?.content}</span>
                    </div>
                  );
                }
              )
            ) : (
              <div className="text-center">인증하지 않았어요!</div>
            )}
          </div>
        </AccordionBody>
      </Accordion>
    </div>
  );
};

export default RoomLogItem;
