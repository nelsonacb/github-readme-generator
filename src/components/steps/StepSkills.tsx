import { useState, useMemo } from 'react';
import {
  Input,
  Select,
  Badge,
  Button,
  Typography,
  Checkbox,
  Card,
  Divider,
  Alert,
  Space,
} from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { useStore } from '../../store/useStore';
import { technologies, TECH_CATEGORIES } from '../../utils/technologies';

const { Title, Text } = Typography;

export const StepSkills = () => {
  const {
    selectedTechs,
    toggleTech,
    enhancements,
    updateEnhancements,
    setCurrentStep,
  } = useStore();
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');

  const filteredTechs = useMemo(() => {
    return technologies.filter((tech) => {
      const matchSearch = tech.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchCategory =
        categoryFilter === 'all' || tech.category === categoryFilter;
      return matchSearch && matchCategory;
    });
  }, [searchTerm, categoryFilter]);

  const groupedTechs = useMemo(() => {
    if (categoryFilter !== 'all') {
      return { [categoryFilter]: filteredTechs };
    }
    const groups: Record<string, typeof technologies> = {};
    filteredTechs.forEach((tech) => {
      if (!groups[tech.category]) groups[tech.category] = [];
      groups[tech.category].push(tech);
    });
    return groups;
  }, [filteredTechs, categoryFilter]);

  const hasSkills = selectedTechs.length > 0;

  const handleEnhancementChange = (
    key: keyof typeof enhancements,
    checked: boolean,
  ) => {
    if (!hasSkills && checked) return;
    updateEnhancements({ [key]: checked });
  };

  return (
    <div>
      <Title level={3}>Skills & Technologies</Title>
      <Space style={{ marginBottom: 24, flexWrap: 'wrap' }}>
        <Input
          placeholder='Search technology...'
          prefix={<SearchOutlined />}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ width: 250 }}
        />
        <Select
          placeholder='Category'
          value={categoryFilter}
          onChange={setCategoryFilter}
          style={{ width: 200 }}
          options={[
            { value: 'all', label: 'All categories' },
            ...TECH_CATEGORIES.map((cat) => ({ value: cat, label: cat })),
          ]}
        />
        <Badge
          count={selectedTechs.length}
          showZero
          title='Selected technologies'
          style={{ marginBottom: 16 }}
        />
      </Space>

      {Object.entries(groupedTechs).map(
        ([category, techsInCategory]) =>
          techsInCategory.length > 0 && (
            <div
              key={category}
              style={{ marginBottom: 32 }}
            >
              <Title level={4}>{category}</Title>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: `repeat(auto-fill, minmax(120px, 1fr))`,
                  gap: 16,
                }}
              >
                {techsInCategory.map((tech) => {
                  const isSelected = selectedTechs.includes(tech.id);
                  return (
                    <Card
                      key={tech.id}
                      hoverable
                      onClick={() => toggleTech(tech.id)}
                      style={{
                        textAlign: 'center',
                        border: isSelected
                          ? '2px solid #1677ff'
                          : '1px solid #d9d9d9',
                        cursor: 'pointer',
                        padding: '8px',
                      }}
                      bodyStyle={{ padding: '12px' }}
                    >
                      <img
                        src={tech.svgPath}
                        alt={tech.name}
                        style={{ width: 48, height: 48, marginBottom: 8 }}
                      />
                      <div>{tech.name}</div>
                    </Card>
                  );
                })}
              </div>
            </div>
          ),
      )}

      {filteredTechs.length === 0 && (
        <Alert
          message='No technologies found with those criteria'
          type='info'
          showIcon
        />
      )}

      <Divider />
      <Title level={4}>📈 GitHub Profile Enhancements</Title>
      <Text type='secondary'>
        Add visual statistics and achievements to your profile
      </Text>
      <Alert
        message='Select at least one skill above to enable these enhancements'
        type={hasSkills ? 'success' : 'warning'}
        showIcon
        style={{ margin: '16px 0' }}
      />
      <div
        style={{ display: 'flex', flexWrap: 'wrap', gap: 16, marginBottom: 32 }}
      >
        <Checkbox
          checked={enhancements.statsCard}
          onChange={(e) =>
            handleEnhancementChange('statsCard', e.target.checked)
          }
          disabled={!hasSkills}
        >
          GitHub Stats Card
        </Checkbox>
        <Checkbox
          checked={enhancements.streakStats}
          onChange={(e) =>
            handleEnhancementChange('streakStats', e.target.checked)
          }
          disabled={!hasSkills}
        >
          GitHub Streak Stats
        </Checkbox>
        <Checkbox
          checked={enhancements.topLanguagesCard}
          onChange={(e) =>
            handleEnhancementChange('topLanguagesCard', e.target.checked)
          }
          disabled={!hasSkills}
        >
          Top Languages Card
        </Checkbox>
        <Checkbox
          checked={enhancements.profileTrophy}
          onChange={(e) =>
            handleEnhancementChange('profileTrophy', e.target.checked)
          }
          disabled={!hasSkills}
        >
          GitHub Profile Trophy
        </Checkbox>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button onClick={() => setCurrentStep(2)}>Back</Button>
        <Button
          type='primary'
          onClick={() => setCurrentStep(4)}
        >
          Next
        </Button>
      </div>
    </div>
  );
};
