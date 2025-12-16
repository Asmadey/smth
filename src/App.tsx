import { useState } from 'react';
import { Users, Send, User, Phone, Briefcase, FolderKanban, MessageCircle } from 'lucide-react';
import ProfileHeader from './components/ProfileHeader';
import ToggleSwitch from './components/ToggleSwitch';
import LinkCard from './components/LinkCard';

function App() {
  const [activeTab, setActiveTab] = useState<'personal' | 'business'>('personal');

  // Данные для вкладки "Частным лицам"
  const personalSections = [
    {
      icon: <Users size={20} />,
      iconColor: '#f97316',
      title: 'Воркшоп "ИИ для чайников"',
      description: 'Практический курс по основам работы с ИИ-инструментами',
      href: '#workshop-basics',
    },
    {
      icon: <Users size={20} />,
      iconColor: '#f59e0b',
      title: 'Менторство по ИИ для продактов',
      description: 'Индивидуальное сопровождение для продуктовых менеджеров',
      href: '#mentorship',
    },
    {
      icon: <MessageCircle size={20} />,
      iconColor: '#3b82f6',
      title: 'Telegram-Канал про ИИ',
      description: 'Новости, кейсы и практические советы каждый день',
      href: 'https://t.me/your_channel',
    },
    {
      icon: <Send size={20} />,
      iconColor: '#a855f7',
      title: 'Написать мне в Telegram',
      description: 'Обсудим ваш проект или задачу',
      href: 'https://t.me/your_username',
    },
    {
      icon: <User size={20} />,
      iconColor: '#3b82f6',
      title: 'Обо мне',
      description: 'Опыт работы, кейсы и достижения',
      href: '#about',
    },
  ];

  // Данные для вкладки "Бизнесу"
  const businessSections = [
    {
      icon: <Phone size={20} />,
      iconColor: '#10b981',
      title: 'Назначить звонок',
      description: 'Обсудим возможности внедрения ИИ в вашу компанию',
      href: '#call',
    },
    {
      icon: <Users size={20} />,
      iconColor: '#f97316',
      title: 'Воркшоп "ИИ для команд"',
      description: 'Обучение сотрудников эффективной работе с ИИ',
      href: '#workshop-teams',
    },
    {
      icon: <Briefcase size={20} />,
      iconColor: '#6366f1',
      title: 'ИИ консалтинг',
      description: 'Аудит процессов и разработка стратегии внедрения ИИ',
      href: 'https://mentorclub.ru',
    },
    {
      icon: <Users size={20} />,
      iconColor: '#8b5cf6',
      title: 'ИИ-помощники для руководителей',
      description: 'Персональные ассистенты на базе GPT для топ-менеджмента',
      href: '#ai-assistants',
    },
    {
      icon: <FolderKanban size={20} />,
      iconColor: '#ec4899',
      title: 'Портфолио ИИ кейсов',
      description: 'Реальные проекты и результаты внедрения',
      href: '#portfolio',
    },
  ];

  const sections = activeTab === 'personal' ? personalSections : businessSections;

  return (
    <div className="min-h-screen">
      {/* Main content */}
      <div className="container mx-auto max-w-2xl px-4 pb-12">
        {/* Profile Header */}
        <ProfileHeader />

        {/* Toggle Switch */}
        <ToggleSwitch activeTab={activeTab} onTabChange={setActiveTab} />

        {/* Link Cards */}
        <div className="space-y-3">
          {sections.map((section, index) => (
            <LinkCard
              key={`${activeTab}-${index}`}
              icon={section.icon}
              iconColor={section.iconColor}
              title={section.title}
              description={section.description}
              href={section.href}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
