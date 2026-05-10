import { useState } from 'react';
import { Typography, Button, Card, message, Tabs, theme, Upload } from 'antd';
import {
  CopyOutlined,
  DownloadOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';
import { useStore } from '../../store/useStore';
import { useThemeStore } from '../../store/useThemeStore';
import { generateReadme } from '../../utils/generateReadme';

const { Title } = Typography;
const { TabPane } = Tabs;
const { useToken } = theme;

export const StepPreview = () => {
  const state = useStore();
  const { setCurrentStep } = useStore();
  const { mode } = useThemeStore();
  const { token } = useToken();
  const [copied, setCopied] = useState(false);
  const markdown = generateReadme(state);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(markdown);
    setCopied(true);
    message.success('README copied to clipboard');
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([markdown], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'README.md';
    a.click();
    URL.revokeObjectURL(url);
    message.success('README.md downloaded');
  };

  const handleExport = () => {
    const fullState = useStore.getState();
    const dataStr = JSON.stringify(fullState, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'readme-config.json';
    a.click();
    URL.revokeObjectURL(url);
    message.success('Configuration exported');
  };

  const handleImport = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const importedState = JSON.parse(e.target?.result as string);
        if (importedState.basicInfo && importedState.social) {
          useStore.setState(importedState);
          message.success('Configuration imported successfully');
        } else {
          message.error('Invalid JSON file');
        }
      } catch {
        message.error('Error parsing JSON');
      }
    };
    reader.readAsText(file);
    return false;
  };

  const previewBackground =
    mode === 'dark' ? token.colorBgContainer : '#f5f5f5';
  const previewColor = mode === 'dark' ? token.colorText : 'inherit';

  return (
    <div>
      <Title level={3}>Preview & Generate</Title>
      <div
        style={{ marginBottom: 16, display: 'flex', gap: 12, flexWrap: 'wrap' }}
      >
        <Button
          icon={<CopyOutlined />}
          onClick={handleCopy}
          type='primary'
        >
          {copied ? 'Copied!' : 'Copy README'}
        </Button>
        <Button
          icon={<DownloadOutlined />}
          onClick={handleDownload}
        >
          Download .md
        </Button>
        <Button
          icon={<DownloadOutlined />}
          onClick={handleExport}
        >
          Export JSON
        </Button>
        <Upload
          accept='.json'
          showUploadList={false}
          beforeUpload={handleImport}
        >
          <Button icon={<UploadOutlined />}>Import JSON</Button>
        </Upload>
        <Button onClick={() => setCurrentStep(3)}>Back</Button>
      </div>
      <Card title='Preview'>
        <Tabs defaultActiveKey='preview'>
          <TabPane
            tab='Rendered'
            key='preview'
          >
            <div
              style={{
                maxHeight: '70vh',
                overflow: 'auto',
                padding: 16,
                background: previewBackground,
                color: previewColor,
              }}
            >
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw, rehypeSanitize]}
              >
                {markdown}
              </ReactMarkdown>
            </div>
          </TabPane>
          <TabPane
            tab='Markdown Code'
            key='code'
          >
            <pre
              style={{
                background: previewBackground,
                color: previewColor,
                padding: 16,
                overflow: 'auto',
                maxHeight: '70vh',
              }}
            >
              {markdown}
            </pre>
          </TabPane>
        </Tabs>
      </Card>
    </div>
  );
};
