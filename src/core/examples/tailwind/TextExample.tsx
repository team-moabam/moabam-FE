interface TextProps {
  style: 'bold' | 'regular';
  size: 'xs' | 'sm' | 'base' | 'xl' | '2xl';
}
const sizeMap: {
  [size: string]: {
    class: string;
    rem: string;
  };
} = {
  xs: {
    class: 'text-xs',
    rem: '0.75rem'
  },
  sm: {
    class: 'text-sm',
    rem: '0.875rem'
  },
  base: {
    class: 'text-base',
    rem: '1rem'
  },
  xl: {
    class: 'text-xl',
    rem: '1.25rem'
  },
  '2xl': {
    class: 'text-2xl',
    rem: '1.5rem'
  }
};
const TextExample = ({ style, size }: TextProps) => {
  const textClassName =
    `${style === 'bold' ? 'font-IMHyemin-bold' : 'font-IMHyemin-regular'} ` +
    `${sizeMap[size].class}`;
  return (
    <div className="p-2">
      <p className={textClassName}>
        {`IMHyemin-${style}`} {sizeMap[size].rem}
      </p>
    </div>
  );
};

export default TextExample;
