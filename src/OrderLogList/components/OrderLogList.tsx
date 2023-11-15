import { RiCoupon2Fill } from 'react-icons/ri';
import { FaClipboardList } from 'react-icons/fa6';
import { IoMdCash } from 'react-icons/io';
import { data } from '../mocks/bugsHistory';
import { bugs } from '../mocks/Bugs';

const OrderLogList = () => {
  const { history } = data;
  return (
    <ul>
      {history.map(({ id, bugType, action, amount, date }) => (
        <li
          className="flex items-center p-5"
          key={id}
        >
          <div className="flex flex-1 items-center gap-5">
            <div className={`text-xl ${bugs[bugType].color} `}>
              {actionsIcon[action]}
            </div>
            <div>{`${action}으로 ${bugs[bugType].name} ${amount}마리 획득!`}</div>
          </div>
          <div className="text-sm text-dark-gray">{date.slice(0, 10)}</div>
        </li>
      ))}
    </ul>
  );
};

export default OrderLogList;

const actionsIcon = {
  보상: <RiCoupon2Fill />,
  쿠폰: <FaClipboardList />,
  충전: <IoMdCash />
};
