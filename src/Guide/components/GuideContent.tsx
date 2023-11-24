import React from 'react';

interface GuideContentProps {
  text: string[];
  subText: string;
  image: string;
}

const GuideContent = ({ text, subText, image }: GuideContentProps) => {
  return (
    <div className="flex w-full flex-col items-center gap-16">
      <div>
        <div className="mb-5">
          {text.map((line) => (
            <div className="mb-2 font-IMHyemin-bold text-3xl">{line}</div>
          ))}
        </div>
        <div className="min-h-[2rem] font-IMHyemin-bold text-dark-gray">
          {subText}
        </div>
      </div>

      <div className="">
        <img
          className="h-40"
          src={image}
        />
      </div>
    </div>
  );
};

export default GuideContent;
