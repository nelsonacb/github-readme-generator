import { Typography, Row, Col, Card } from 'antd';
import {
  RocketOutlined,
  CodeOutlined,
  UserOutlined,
  DownloadOutlined,
  EyeOutlined,
  GlobalOutlined,
} from '@ant-design/icons';

const { Title, Text } = Typography;

export const FeaturesSection = () => (
  <div
    id='features'
    style={{ marginBottom: 64 }}
  >
    <Title level={2}>Key Features</Title>
    <Row gutter={[32, 32]}>
      <Col
        xs={24}
        md={8}
      >
        <Card>
          <RocketOutlined style={{ fontSize: 32, color: '#1677ff' }} />
          <Title level={4}>Easy to Use</Title>
          <Text>Step‑by‑step form with validation and data persistence.</Text>
        </Card>
      </Col>
      <Col
        xs={24}
        md={8}
      >
        <Card>
          <CodeOutlined style={{ fontSize: 32, color: '#1677ff' }} />
          <Title level={4}>Customizable</Title>
          <Text>
            Choose from dozens of technologies, social links, and GitHub badges.
          </Text>
        </Card>
      </Col>
      <Col
        xs={24}
        md={8}
      >
        <Card>
          <EyeOutlined style={{ fontSize: 32, color: '#1677ff' }} />
          <Title level={4}>Live Preview</Title>
          <Text>See the final README before copying or downloading it.</Text>
        </Card>
      </Col>
      <Col
        xs={24}
        md={8}
      >
        <Card>
          <DownloadOutlined style={{ fontSize: 32, color: '#1677ff' }} />
          <Title level={4}>Export / Import</Title>
          <Text>Save your configuration as JSON and load it later.</Text>
        </Card>
      </Col>
      <Col
        xs={24}
        md={8}
      >
        <Card>
          <UserOutlined style={{ fontSize: 32, color: '#1677ff' }} />
          <Title level={4}>GitHub Enhancements</Title>
          <Text>Visitor counter, stats cards, streak, and trophies.</Text>
        </Card>
      </Col>
      <Col
        xs={24}
        md={8}
      >
        <Card>
          <GlobalOutlined style={{ fontSize: 32, color: '#1677ff' }} />
          <Title level={4}>Custom Banner</Title>
          <Text>Add a personalized banner image to your README.</Text>
        </Card>
      </Col>
    </Row>
  </div>
);
