interface TabBarProps {
  width: number;
  left: number;
}

const TabBar = ({ width, left }: TabBarProps) => {
  return width ? (
    <div
      className="absolute h-1 rounded-sm bg-black transition-all duration-200 dark:bg-white"
      style={{ width, left, bottom: 0 }}
    ></div>
  ) : null;
};

export default TabBar;
