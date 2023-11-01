interface BirdCardProps {
  imgSrc: string;
  name: string;
  time: string;
}

const BirdCard = ({ imgSrc, name, time }: BirdCardProps) => {
  return (
    <div className="flex h-48 grow flex-col items-center justify-center rounded-xl border border-light-point bg-white">
      <img
        src={imgSrc}
        className="w-20"
      />
      <div className="pt-2 text-center leading-8">
        <b>{name}</b>
        <p className="text-sm text-dark-gray">{time}</p>
      </div>
    </div>
  );
};

export default BirdCard;
