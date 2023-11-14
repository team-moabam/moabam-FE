import { Avatar } from '@/shared/Avatar';
import { Accordion, AccordionHeader, AccordionBody } from '@/shared/Accordion';

const RoomLogItem = () => {
  return (
    <div className="mb-[1.19rem] flex w-full items-center justify-between peer-invalid:visible">
      <Accordion>
        <AccordionHeader className="w-full">
          <Avatar
            imgUrl="https://picsum.photos/200"
            userId="1234"
            nickname="볼록눈이"
            contribution={65}
          />
        </AccordionHeader>
        <AccordionBody>
          <div className="grid grid-cols-2 gap-x-3 gap-y-[1.32rem] px-[1.19rem] py-7">
            <div>
              <div className="">
                <img
                  src="https://picsum.photos/200"
                  alt=""
                  className="rounded-2xl"
                />
              </div>
              <span>ddd</span>
            </div>
            <div>
              <div className="">
                <img
                  src="https://picsum.photos/200"
                  alt=""
                  className="rounded-2xl"
                />
              </div>
              <span>ddd</span>
            </div>
            <div>
              <div className="">
                <img
                  src="https://picsum.photos/200"
                  alt=""
                  className="rounded-2xl"
                />
              </div>
              <span>ddd</span>
            </div>
          </div>
        </AccordionBody>
      </Accordion>
    </div>
  );
};

export default RoomLogItem;
