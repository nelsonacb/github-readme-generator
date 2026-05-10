import { Input, Button, Typography, Form } from 'antd';
import { useStore } from '../../store/useStore';

const { Title } = Typography;

export const StepLinks = () => {
  const { links, updateLinks, setCurrentStep } = useStore();
  const [form] = Form.useForm();

  return (
    <div>
      <Title level={3}>Links</Title>
      <Form
        form={form}
        layout='vertical'
        initialValues={links}
        onValuesChange={(_, all) => updateLinks(all)}
      >
        <Form.Item
          name='portfolio'
          label='👨‍💻 Portfolio'
        >
          <Input placeholder='https://johndoe.com' />
        </Form.Item>
        <Form.Item
          name='blog'
          label='📝 Blog'
        >
          <Input placeholder='https://dev.to/johndoe' />
        </Form.Item>
        <Form.Item
          name='resume'
          label='📄 Resume/CV'
        >
          <Input placeholder='https://johndoe.com/resume.pdf' />
        </Form.Item>
      </Form>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: 24,
        }}
      >
        <Button onClick={() => setCurrentStep(0)}>Back</Button>
        <Button
          type='primary'
          onClick={() => setCurrentStep(2)}
        >
          Next
        </Button>
      </div>
    </div>
  );
};
