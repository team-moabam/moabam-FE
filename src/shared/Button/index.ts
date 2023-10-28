const defaultStyle =
  'rounded-lg px-4 py-2 shadow-md duration-100 ease-in-out focus:outline-none focus:ring-4 focus:ring-opacity-75 enabled:active:scale-95 disabled:bg-gray-400 disabled:cursor-not-allowed';

const buttonVariants = {
  danger: `${defaultStyle} bg-danger text-white hover:bg-danger-hover focus:ring-danger-ring`,
  success: `${defaultStyle} bg-success text-white hover:bg-success-hover focus:ring-success-ring`,
  warning: `${defaultStyle} bg-warning text-white hover:bg-warning-hover focus:ring-warning-ring`,
  'light-point': `${defaultStyle} bg-light-point text-white hover:bg-light-point-hover focus:ring-light-point-ring`,
  'dark-point': `${defaultStyle} bg-dark-point text-white hover:bg-dark-point-hover focus:ring-dark-point-ring`
};

export default buttonVariants;
