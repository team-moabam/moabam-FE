import PageTemplate from '../templates/PageTemplate';
import { headingStyle, descriptionStyle } from '../constants/styles';
import BirdCard from '../components/BirdCard';

const SelectRoom = () => {
  return (
    <PageTemplate>
      <h1 className={headingStyle}>
        <strong>어떤 새를</strong>
        <p>키우는 방일까요?</p>
      </h1>

      <p className={descriptionStyle}>
        방마다 정해진 새는 <b>변경할 수 없어요.</b>
      </p>

      <section className="flex justify-around gap-10 pt-10 max-[320px]:flex-col">
        <BirdCard
          imgSrc="/assets/Long-Tailed.png"
          name="오목눈이"
          time="4시 ~ 10시"
        />
        <BirdCard
          imgSrc="/assets/Owl.png"
          name="부엉이"
          time="20시 ~ 2시"
        />
      </section>
    </PageTemplate>
  );
};

export default SelectRoom;
