import { Steps, Layout, Card, ConfigProvider, theme as antdTheme } from 'antd';
import { useStore } from './store/useStore';
import { useThemeStore } from './store/useThemeStore';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { AboutSection } from './components/AboutSection';
import { FeaturesSection } from './components/FeaturesSection';
import { HowToUseSection } from './components/HowToUseSection';
import { StepBasicInfo } from './components/steps/StepBasicInfo';
import { StepLinks } from './components/steps/StepLinks';
import { StepSocial } from './components/steps/StepSocial';
import { StepSkills } from './components/steps/StepSkills';
import { StepPreview } from './components/steps/StepPreview';

const { Content } = Layout;

const steps = [
  { title: 'Basic Info', content: <StepBasicInfo /> },
  { title: 'Links', content: <StepLinks /> },
  { title: 'Social', content: <StepSocial /> },
  { title: 'Skills', content: <StepSkills /> },
  { title: 'Preview', content: <StepPreview /> },
];

function App() {
  const { currentStep, setCurrentStep } = useStore();
  const { mode } = useThemeStore();

  const antdThemeConfig = {
    algorithm:
      mode === 'dark' ? antdTheme.darkAlgorithm : antdTheme.defaultAlgorithm,
    token: {
      colorPrimary: '#1677ff',
      borderRadius: 8,
    },
  };

  return (
    <ConfigProvider theme={antdThemeConfig}>
      <Layout style={{ minHeight: '100vh' }}>
        <Navbar />
        <Content
          style={{
            padding: '2rem',
            maxWidth: 1200,
            margin: '0 auto',
            width: '100%',
          }}
        >
          {/* Generator card */}
          <Card style={{ marginBottom: 64 }}>
            <Steps
              current={currentStep}
              onChange={setCurrentStep}
              items={steps.map((step, idx) => ({
                title: step.title,
                key: idx,
              }))}
              style={{ marginBottom: 32 }}
            />
            <div style={{ marginTop: 32 }}>{steps[currentStep].content}</div>
          </Card>

          {/* Info sections */}
          <AboutSection />
          <FeaturesSection />
          <HowToUseSection />
        </Content>
        <Footer />
      </Layout>
    </ConfigProvider>
  );
}

export default App;
