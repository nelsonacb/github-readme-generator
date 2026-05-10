import { Input, Button, Typography, Form, Alert } from 'antd';
import { useStore } from '../../store/useStore';

const { Title } = Typography;

export const StepSocial = () => {
  const { social, updateSocial, setCurrentStep } = useStore();
  const [form] = Form.useForm();

  return (
    <div>
      <Title level={3}>Social Profiles</Title>
      <Alert
        title='Enter usernames only, not full URLs'
        description="Just provide your username or handle for each platform. We'll automatically generate the correct URLs. ✓ Correct: johndoe ✗ Incorrect: https://twitter.com/johndoe"
        type='info'
        showIcon
        style={{ marginBottom: 24 }}
      />
      <Form
        form={form}
        layout='vertical'
        initialValues={social}
        onValuesChange={(_, all) => updateSocial(all)}
      >
        <Form.Item
          name='github'
          label='GitHub'
        >
          <Input placeholder='johndoe' />
        </Form.Item>
        <Form.Item
          name='linkedin'
          label='LinkedIn'
        >
          <Input placeholder='johndoe' />
        </Form.Item>
        <Form.Item
          name='twitter'
          label='Twitter'
        >
          <Input placeholder='johndoe' />
        </Form.Item>
        <Form.Item
          name='instagram'
          label='Instagram'
        >
          <Input placeholder='johndoe' />
        </Form.Item>
        <Form.Item
          name='medium'
          label='Medium'
        >
          <Input placeholder='johndoe' />
        </Form.Item>
        <Form.Item
          name='stackoverflow'
          label='Stack Overflow'
        >
          <Input placeholder='1234567 (user id)' />
        </Form.Item>
        <Form.Item
          name='facebook'
          label='Facebook'
        >
          <Input placeholder='johndoe' />
        </Form.Item>
      </Form>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: 24,
        }}
      >
        <Button onClick={() => setCurrentStep(1)}>Back</Button>
        <Button
          type='primary'
          onClick={() => setCurrentStep(3)}
        >
          Next
        </Button>
      </div>
    </div>
  );
};
