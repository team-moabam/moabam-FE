import type { Meta, StoryObj } from '@storybook/react';
import { createPortal } from 'react-dom';
import useTheme, { ThemeProvider } from '@/core/hooks/useTheme';
import { PORTALS } from '@/core/constants/portals';

const meta = {
  title: 'Hooks/useTheme',
  argTypes: {
    theme: {
      description: '현재 테마의 상태<br/>`(light | dark)`'
    },
    setTheme: {
      description: '테마를 변경하는 함수<br/>`setTheme(theme: Theme)`'
    },
    toggleTheme: {
      description: '테마를 토글하는 함수<br/>`toggleTheme()`'
    }
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    )
  ]
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <DefaultPage />
};

export const Portal: Story = {
  render: () => <PortalPage />
};

const DefaultPage = () => {
  const { theme, setTheme, toggleTheme } = useTheme();

  return (
    <div className={theme === 'dark' ? 'dark' : ''}>
      <div className="h-full overflow-auto bg-light-main text-black dark:bg-dark-main dark:text-white">
        <div>하이</div>
        <div>{theme}</div>
        <div>
          <button onClick={() => setTheme('light')}>화이트로 테마 변경</button>
        </div>
        <div>
          <button onClick={() => setTheme('dark')}>다크로 테마 변경</button>
        </div>
        <div>
          <button onClick={toggleTheme}>토글 시키기</button>
        </div>
      </div>
    </div>
  );
};

const PortalPage = () => {
  const { theme, setTheme, toggleTheme } = useTheme();

  return (
    <>
      {createPortal(
        <div className={theme === 'dark' ? 'dark' : ''}>
          <div className="h-full overflow-auto bg-light-main text-black dark:bg-dark-main dark:text-white">
            <div>하이</div>
            <div>{theme}</div>
            <div>
              <button onClick={() => setTheme('light')}>
                화이트로 테마 변경
              </button>
            </div>
            <div>
              <button onClick={() => setTheme('dark')}>다크로 테마 변경</button>
            </div>
            <div>
              <button onClick={toggleTheme}>토글 시키기</button>
            </div>
          </div>
        </div>,
        document.getElementById(PORTALS.bottomSheet)!
      )}
    </>
  );
};
