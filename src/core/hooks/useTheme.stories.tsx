import type { Meta, StoryObj } from '@storybook/react';
import { createPortal } from 'react-dom';
import useTheme, { ThemeProvider } from '@/core/hooks/useTheme';
import { PORTALS } from '@/core/constants/portals';

const meta = {
  title: 'Hooks/useTheme',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'light, black 테마를 전역에서 관리하는 Context 훅입니다.<br/>' +
          '`const context = useTheme();`<br/><br/>' +
          '`context.theme`: 현재 테마의 상태 값입니다. (light | dark)<br/>' +
          '`context.setTheme(theme)`: 테마를 변경합니다.<br/>' +
          '`context.toggleTheme()`: 테마를 토글합니다.<br/>'
      }
    }
  }
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          '기본적으로 main.tsx 에서 `ThemeProvider` 로 감싸져 있습니다.<br/>' +
          '또한 App 컴포넌트에서 최상위의 요소의 `className` 에 테마에 따른 다크모드 설정을 부여했습니다.<br/><br/>' +
          '따라서 기본적으로는 다크 모드에 대한 스타일을 지정하기 위해 `useTheme()` 훅을 사용할 필요가 없습니다.<br/>' +
          '대신 className으로 `dark:` 를 부여해서 사용할 수 있습니다.'
      }
    }
  },
  render: () => (
    <ThemeProvider>
      <DefaultPage />
    </ThemeProvider>
  )
};

export const Portal: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          '다만 `createPortal()` 로 DOM 트리상의 다른 노드에 컴포넌트를 렌더링하는 경우에는<br/>' +
          '최상위 요소의 `className` 에 테마에 따른 다크모드 설정을 부여하는 과정이 필요합니다.<br/><br/>' +
          '이는 `useTheme()` 훅을 통해 얻은 `theme` 을 활용해서 수행할 수 있습니다.'
      }
    }
  },
  render: () => (
    <ThemeProvider>
      <PortalPage />
    </ThemeProvider>
  )
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
