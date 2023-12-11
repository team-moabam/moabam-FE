import React from 'react';
import IntroText from './IntroText';
import Mark from './Mark';
import BirdButton from './BirdButton';

interface AboutMoabamProps {
  theme: string;
}

const AboutMoabam = ({ theme }: AboutMoabamProps) => {
  return (
    <div className="flex h-full flex-col items-start justify-end gap-24 text-black dark:text-white">
      {/* 모두의 아침과 밤 사람들을 모아밤! MoaBam */}
      <div className="flex flex-wrap items-end gap-4">
        <div className="text-3xl text-dark-gray dark:text-light-gray">
          <div className="mb-2 font-IMHyemin-bold">
            <span className="font-IMHyemin-bold text-confirm">모</span>두의{' '}
            <span className="font-IMHyemin-bold text-light-point-hover">
              아
            </span>
            침과{' '}
            <span className="font-IMHyemin-bold text-dark-point-hover">밤</span>
          </div>

          <div className="font-IMHyemin-bold">
            사람들을{' '}
            <span className="font-IMHyemin-bold text-black dark:text-white">
              모아밤!
            </span>
          </div>
        </div>
        <img
          className="mb-1 ml-1 w-52"
          src={`/assets/typologo/typologo-${theme}.svg`}
        />
      </div>

      {/* 모아밤 소개 텍스트 */}
      <div className="flex flex-col gap-8 text-xl max-2xl:text-lg max-xl:text-base">
        <IntroText className="font-IMHyemin-bold">
          매일 매일 나만의 루틴 지키기
        </IntroText>
        <IntroText>
          <Mark>같이 루틴을 하고 싶은 사람들</Mark>과 함께
        </IntroText>
        <IntroText>
          <Mark>귀여운 새 친구들</Mark>과 함께 하면 어떨까요?
        </IntroText>
      </div>

      {/* 링크 바로가기 */}
      <div className="relative -bottom-12 flex justify-start gap-4">
        <BirdButton
          text="깃허브 구경하기"
          birdImage="/assets/skins/sleepOmokSkin1.png"
          link="https://github.com/orgs/team-moabam/repositories"
        />
        <BirdButton
          text="기획스토리 보기"
          birdImage="/assets/skins/awakeOwlSkin2.png"
          link="https://windy-echo-a31.notion.site/MoaBam-abe2d962b807448e89562b9ecc5ea550"
        />
      </div>
    </div>
  );
};

export default AboutMoabam;
