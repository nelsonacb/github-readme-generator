import { Typography } from 'antd';

const { Title, Paragraph } = Typography;

export const HowToUseSection = () => (
  <div
    id='how-to-use'
    style={{ marginBottom: 64 }}
  >
    <Title level={2}>How to Use</Title>
    <ol>
      <li>
        Fill in your basic information (name, current work, fun fact, etc.).
      </li>
      <li>Add links to your portfolio, blog, and resume.</li>
      <li>
        Enter your social media usernames (only the username, not the full URL).
      </li>
      <li>
        Select the technologies you master – you can search and filter by
        category.
      </li>
      <li>
        Activate the GitHub statistics you want (requires at least one
        technology selected).
      </li>
      <li>
        Copy or download the generated README and paste it into your profile
        repository.
      </li>
    </ol>
    <Paragraph>
      The generated README will include a visitor counter, GitHub stats,
      technology icons, and all the information you provided. You can also
      export your configuration as JSON to reuse it later.
    </Paragraph>
  </div>
);
