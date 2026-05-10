import { Input, Checkbox, Button, Typography, Form, message } from 'antd';
import { useStore } from '../../store/useStore';

const { Title, Text } = Typography;

export const StepBasicInfo = () => {
  const { basicInfo, updateBasicInfo, setCurrentStep } = useStore();
  const [form] = Form.useForm();

  const onNext = async () => {
    try {
      await form.validateFields();
      setCurrentStep(1);
    } catch {
      message.error('Por favor completa los campos obligatorios');
    }
  };

  return (
    <div>
      <Title level={3}>Basic Information</Title>
      <Text type='secondary'>Tell us about yourself and what you do.</Text>
      <Form
        form={form}
        layout='vertical'
        initialValues={basicInfo}
        onValuesChange={(_, all) => updateBasicInfo(all)}
        style={{ marginTop: 24 }}
      >
        <Form.Item
          name='name'
          label='Your Name'
          rules={[{ required: true, message: 'Name is required' }]}
        >
          <Input placeholder='John Doe' />
        </Form.Item>
        <Form.Item
          name='subtitle'
          label='Subtitle'
        >
          <Input placeholder='Full Stack Developer | Open Source Enthusiast' />
        </Form.Item>
        <Form.Item
          name='workingOn'
          label="🔭 I'm currently working on"
        >
          <Input placeholder='A new e-commerce platform' />
        </Form.Item>
        <Form.Item
          name='learning'
          label="🌱 I'm currently learning"
        >
          <Input placeholder='Rust and WebAssembly' />
        </Form.Item>
        <Form.Item
          name='collaborateOn'
          label="👯 I'm looking to collaborate on"
        >
          <Input placeholder='Open Source AI projects' />
        </Form.Item>
        <Form.Item
          name='helpWith'
          label="🤝 I'm looking for help with"
        >
          <Input placeholder='Optimizing database queries' />
        </Form.Item>
        <Form.Item
          name='askMeAbout'
          label='💬 Ask me about'
        >
          <Input placeholder='React, Node.js, GraphQL' />
        </Form.Item>
        <Form.Item
          name='reachMe'
          label='📫 How to reach me'
        >
          <Input placeholder='email@example.com' />
        </Form.Item>
        <Form.Item
          name='funFact'
          label='⚡ Fun fact'
        >
          <Input placeholder='I love coffee and coding' />
        </Form.Item>
        <Form.Item
          name='showVisitorBadge'
          valuePropName='checked'
        >
          <Checkbox>Show profile visitors counter badge</Checkbox>
        </Form.Item>
      </Form>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button
          type='primary'
          onClick={onNext}
        >
          Next
        </Button>
      </div>
    </div>
  );
};
