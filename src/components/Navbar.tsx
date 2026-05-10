import { useState } from 'react';
import { Layout, Menu, Switch, Typography, Button, Drawer, Grid } from 'antd';
import { MenuOutlined, SunOutlined, MoonOutlined } from '@ant-design/icons';
import { useThemeStore } from '../store/useThemeStore';

const { Header } = Layout;
const { Title } = Typography;
const { useBreakpoint } = Grid;

export const Navbar = () => {
  const { mode, toggleTheme } = useThemeStore();
  const screens = useBreakpoint();
  const [drawerVisible, setDrawerVisible] = useState(false);

  const menuItems = [
    { key: 'about', label: 'About' },
    { key: 'features', label: 'Features' },
    { key: 'how-to-use', label: 'How to Use' },
    {
      key: 'github',
      label: 'GitHub',
      href: 'https://github.com/nelsonacb/github-readme-generator',
    },
  ];

  const handleMenuClick = ({ key }: { key: string }) => {
    if (key === 'github') {
      window.open(
        'https://github.com/nelsonacb/github-readme-generator',
        '_blank',
      );
    } else {
      document.getElementById(key)?.scrollIntoView({ behavior: 'smooth' });
    }
    setDrawerVisible(false);
  };

  const MenuComponent = () => (
    <Menu
      theme='dark'
      mode={screens.md ? 'horizontal' : 'vertical'}
      items={menuItems}
      onClick={handleMenuClick}
      style={{ flex: 1, justifyContent: 'flex-end', minWidth: 0 }}
    />
  );

  return (
    <Header
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        padding: '0 16px',
      }}
    >
      <Title
        level={3}
        style={{ color: 'white', margin: 0, marginRight: 24 }}
      >
        ✨ README Generator
      </Title>

      {screens.md ? (
        <>
          <MenuComponent />
          <Switch
            checked={mode === 'dark'}
            onChange={toggleTheme}
            checkedChildren={<MoonOutlined />}
            unCheckedChildren={<SunOutlined />}
            style={{ marginLeft: 16 }}
          />
        </>
      ) : (
        <>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <Switch
              checked={mode === 'dark'}
              onChange={toggleTheme}
              checkedChildren={<MoonOutlined />}
              unCheckedChildren={<SunOutlined />}
            />
            <Button
              type='text'
              icon={<MenuOutlined />}
              onClick={() => setDrawerVisible(true)}
              style={{ color: 'white' }}
            />
          </div>
          <Drawer
            title='Menu'
            placement='right'
            onClose={() => setDrawerVisible(false)}
            open={drawerVisible}
            styles={{ body: { padding: 0 } }}
          >
            <MenuComponent />
          </Drawer>
        </>
      )}
    </Header>
  );
};
