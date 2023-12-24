interface GuideContent {
  text: string[];
  subText: string;
  image: string;
}

export const GUIDE_CONTENTS: GuideContent[] = [
  {
    text: ['사람들과 함께', '루틴을 지켜보세요'],
    subText: '방에 참가하거나, 여러분이 만들 수도 있어요',
    image: '/assets/guide/guideRoutine.png'
  },
  {
    text: ['함께 할 수록', '새가 보상을 받아요'],
    subText: '낮과 밤 별로 다른 보상이 있어요',
    image: '/assets/skins/awakeOwlSkin2.png'
  },
  {
    text: ['보상으로 스킨을 사고', '뽐내보세요!'],
    subText: '',
    image: '/assets/guide/guideOmok.png'
  }
];

export default GUIDE_CONTENTS;
