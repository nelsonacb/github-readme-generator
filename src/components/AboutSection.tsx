import { Typography } from 'antd';

const { Title, Paragraph } = Typography;

export const AboutSection = () => (
  <div
    id='about'
    style={{ marginBottom: 64 }}
  >
    <Title level={2}>About This Project</Title>
    <Paragraph>
      This README generator allows you to create a professional and attractive
      GitHub profile without writing a single line of Markdown. Just complete
      the steps, select your favorite technologies, and get a README ready to
      copy or download.
    </Paragraph>
  </div>
);
