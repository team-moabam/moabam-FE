import { useSuspenseQuery } from '@tanstack/react-query';
import { RiCoupon2Fill } from 'react-icons/ri';
import { FaClipboardList } from 'react-icons/fa6';
import { IoMdCash } from 'react-icons/io';
import { GiPayMoney } from 'react-icons/gi';
import { bugOptions } from '@/core/api/options';

const OrderLogList = () => {
  const {
    data: { history }
  } = useSuspenseQuery({ ...bugOptions.history() });

  if (!history)
    return (
      <div className="mt-5 text-center text-dark-gray">요청 오류입니다</div>
    );

  if (history.length === 0)
    return (
      <div className="mt-5 text-center text-dark-gray">
        사용 내역이 없습니다
      </div>
    );

  return (
    <ul>
      {history.map(({ id, bugType, actionType, date, quantity }) => {
        const { icon, StartText, ResultText } = historyOptions[actionType];
        return (
          <li
            className="flex items-center p-5"
            key={id}
          >
            <div className="flex flex-1 items-center gap-5">
              <div className={`text-xl ${bugs[bugType].color} `}>{icon}</div>
              <div>{`${StartText} ${bugs[bugType].name} ${quantity}마리 ${ResultText}`}</div>
            </div>
            <div className="text-sm text-dark-gray">{date.slice(0, 10)}</div>
          </li>
        );
      })}
    </ul>
  );
};

export default OrderLogList;

const historyOptions = {
  REWARD: {
    icon: <FaClipboardList />,
    StartText: '인증 보상으로',
    ResultText: '획득!'
  },
  COUPON: {
    icon: <RiCoupon2Fill />,
    StartText: '쿠폰으로',
    ResultText: '획득!'
  },
  CHARGE: {
    icon: <IoMdCash />,
    StartText: '충전으로',
    ResultText: '획득!'
  },
  USE: {
    icon: <GiPayMoney />,
    StartText: '',
    ResultText: '사용!'
  }
};

const bugs = {
  MORNING: {
    color: 'text-light-point',
    name: '낮벌레'
  },
  NIGHT: {
    color: 'text-dark-point',
    name: '밤벌레'
  },
  GOLDEN: {
    color: 'text-warning',
    name: '황금벌레'
  }
};
