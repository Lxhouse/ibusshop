import React from 'react';
import Button, { ButtonType, ButtonSize } from './components/Button';

const App: React.FC = () => {
  return (
    <div>
      {/* 默认按钮 */}
      <Button>Default Button</Button>

      {/* 主按钮 */}
      <Button btnType={ButtonType.Primary}>Primary Button</Button>

      {/* 危险按钮 */}
      <Button btnType={ButtonType.Danger}>Danger Button</Button>

      {/* 链接按钮 */}
      <Button btnType={ButtonType.Link} href="https://example.com">
        Link Button
      </Button>

      {/* 大小不同的按钮 */}
      <Button size={ButtonSize.Large}>Large Button</Button>
      <Button size={ButtonSize.Small}>Small Button</Button>

      {/* 禁用的链接按钮 */}
      <Button btnType={ButtonType.Link} href="https://example.com" disabled>
        Disabled Link Button
      </Button>
    </div>
  );
};

export default App;
