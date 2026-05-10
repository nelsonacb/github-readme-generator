import { useState, useEffect } from 'react';
import { Layout, Row, Col, Typography, Divider } from 'antd';
import {
  GithubOutlined,
  LinkedinOutlined,
  MailOutlined,
} from '@ant-design/icons';

const { Footer: AntFooter } = Layout;
const { Title, Text, Link } = Typography;

const tips = [
  '💡 Use emojis in your README to make it more attractive.',
  '📈 GitHub stats update automatically every hour.',
  "🎨 Choose a consistent theme for your badges (e.g., 'radical', 'gruvbox').",
  '🔗 Shorten your URLs with services like bit.ly for a cleaner README.',
  '📝 Check spelling: a professional README builds trust.',
  "⚡ Add a 'Acknowledgments' section if you use third-party resources.",
  '🖼️ A custom banner at the top makes a difference.',
  '🏆 GitHub trophies are based on your repositories and contributions.',
  '🌙 Dark mode is not only stylish but also saves battery on mobile.',
  '🧠 Save your configuration as JSON to have multiple profiles.',
];

export const Footer = () => {
  const [tip, setTip] = useState('');

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * tips.length);
    setTip(tips[randomIndex]);
  }, []);

  return (
    <AntFooter
      style={{
        backgroundColor: '#001529',
        color: 'white',
        padding: '48px 24px',
      }}
    >
      <Row gutter={[32, 32]}>
        <Col
          xs={24}
          sm={12}
          md={6}
        >
          <Title
            level={4}
            style={{ color: 'white' }}
          >
            About
          </Title>
          <Text style={{ color: 'rgba(255,255,255,0.65)' }}>
            Professional README generator for your GitHub profile. Create an
            impactful profile in minutes.
          </Text>
        </Col>
        <Col
          xs={24}
          sm={12}
          md={6}
        >
          <Title
            level={4}
            style={{ color: 'white' }}
          >
            Quick Links
          </Title>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <Link
              href='#about'
              style={{ color: 'rgba(255,255,255,0.65)' }}
            >
              About
            </Link>
            <Link
              href='#features'
              style={{ color: 'rgba(255,255,255,0.65)' }}
            >
              Features
            </Link>
            <Link
              href='#how-to-use'
              style={{ color: 'rgba(255,255,255,0.65)' }}
            >
              How to Use
            </Link>
            <Link
              href='https://github.com/nelsonacb'
              target='_blank'
              style={{ color: 'rgba(255,255,255,0.65)' }}
            >
              GitHub
            </Link>
          </div>
        </Col>
        <Col
          xs={24}
          sm={12}
          md={6}
        >
          <Title
            level={4}
            style={{ color: 'white' }}
          >
            Technologies
          </Title>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <Text style={{ color: 'rgba(255,255,255,0.65)' }}>
              React + Vite
            </Text>
            <Text style={{ color: 'rgba(255,255,255,0.65)' }}>TypeScript</Text>
            <Text style={{ color: 'rgba(255,255,255,0.65)' }}>Ant Design</Text>
            <Text style={{ color: 'rgba(255,255,255,0.65)' }}>Zustand</Text>
          </div>
        </Col>
        <Col
          xs={24}
          sm={12}
          md={6}
        >
          <Title
            level={4}
            style={{ color: 'white' }}
          >
            Follow Us
          </Title>
          <div style={{ display: 'flex', gap: 16 }}>
            <Link
              href='https://github.com/nelsonacb'
              target='_blank'
            >
              <GithubOutlined style={{ fontSize: 24, color: 'white' }} />
            </Link>
            <Link
              href='https://linkedin.com/in/nelson-alejandro-dev'
              target='_blank'
            >
              <LinkedinOutlined style={{ fontSize: 24, color: 'white' }} />
            </Link>
            <Link href='mailto:cruznelsonalejandro@gmail.com'>
              <MailOutlined style={{ fontSize: 24, color: 'white' }} />
            </Link>
          </div>
        </Col>
      </Row>
      <Divider
        style={{
          backgroundColor: 'rgba(255,255,255,0.1)',
          margin: '32px 0 24px',
        }}
      />
      <Row justify='center'>
        <Col>
          <Text
            style={{ color: 'rgba(255,255,255,0.65)', fontStyle: 'italic' }}
          >
            {tip}
          </Text>
        </Col>
      </Row>
      <Row
        justify='center'
        style={{ marginTop: 16 }}
      >
        <Col>
          <Text style={{ color: 'rgba(255,255,255,0.45)' }}>
            © 2026 GitHub README Generator. All rights reserved.
          </Text>
        </Col>
      </Row>
    </AntFooter>
  );
};
