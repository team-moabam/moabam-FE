const defaultVariant =
  'rounded-lg px-4 py-2 shadow-md duration-100 ease-in-out focus:outline-none';

const pesudoVariants = {
  hover: 'enabled:hover:-translate-y-0.5',
  focus: 'focus:ring-4 focus:ring-opacity-75',
  click: 'enabled:active:translate-y-0 enabled:active:scale-95',
  disabled: 'disabled:bg-gray-400 disabled:cursor-not-allowed'
};

const themeVariants = {
  danger: 'bg-danger text-white hover:bg-danger-hover focus:ring-danger-ring',
  success:
    'bg-success text-white hover:bg-success-hover focus:ring-success-ring',
  warning:
    'bg-warning text-white hover:bg-warning-hover focus:ring-warning-ring',
  'light-point':
    'bg-light-point text-white hover:bg-light-point-hover focus:ring-light-point-ring',
  'dark-point':
    'bg-dark-point text-white hover:bg-dark-point-hover focus:ring-dark-point-ring'
};

/**
 * 버튼에 들어갈 tailwind 클래스의 조합을 반환합니다.
 * @param theme 버튼에 색상을 적용할 테마
 * @param options 버튼에 상호작용시 기본 스타일의 적용 여부를 선택합니다. (기본적으로는 모두 true입니다.)
 * @returns string
 */
const buttonVariants = (
  theme: keyof typeof themeVariants = 'light-point',
  options?: Partial<{ [K in keyof typeof pesudoVariants]: boolean }>
) => {
  const { hover, focus, click, disabled } = {
    hover: true,
    focus: true,
    click: true,
    disabled: true,
    ...options
  };

  return `
    ${defaultVariant}
    ${themeVariants[theme]}
    ${hover && pesudoVariants.hover}
    ${focus && pesudoVariants.focus}
    ${click && pesudoVariants.click}
    ${disabled && pesudoVariants.disabled}
  `;
};

export default buttonVariants;
