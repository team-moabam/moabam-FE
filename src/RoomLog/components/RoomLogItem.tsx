import { Avatar } from '@/shared/Avatar';
import { Accordion, AccordionHeader, AccordionBody } from '@/shared/Accordion';
import { RankMember } from '@/core/types/Member';

type extendedProps = {
  routine: { routineId: number; content: string }[];
};

type RoomLogItemProps = extendedProps & RankMember;

const RoomLogItem = ({
  contributionPoint,
  profileImage,
  memberId,
  nickname,
  certificationImage,
  routine
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
          <div className="grid grid-cols-2 gap-x-3 gap-y-[1.32rem] px-[1.19rem] py-7">
            {certificationImage ? (
              certificationImage.map(({ routineId: checkRoutineId, image }) => {
                const routineData = routine.find(
                  ({ routineId }) => routineId === checkRoutineId
                );
                return (
                  <div key={checkRoutineId}>
                    <div>
                      <img
                        src={image}
                        className="rounded-2xl"
                      />
                    </div>
                    <span>{routineData?.content}</span>
                  </div>
                );
              })
            ) : (
              <div className="text-center">인증하지 않았어요..</div>
            )}
          </div>
        </AccordionBody>
      </Accordion>
    </div>
  );
};

export default RoomLogItem;
