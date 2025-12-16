import { useState } from 'react';
import { Users, Send, User, FolderKanban, MessageCircle, Calendar, Search } from 'lucide-react';
import ProfileHeader from './components/ProfileHeader';
import ToggleSwitch from './components/ToggleSwitch';
import LinkCard from './components/LinkCard';

function App() {
  const [activeTab, setActiveTab] = useState<'personal' | 'business'>('personal');
  const [language, setLanguage] = useState<'ru' | 'en'>('ru');

  // Локализованные данные для вкладки "Частным лицам"
  const personalSections = {
    ru: [
      {
        icon: <Users size={20} />,
        iconClass: 'icon-gradient-orange',
        title: 'Воркшоп "ИИ для чайников"',
        description: 'Практический курс по основам работы с ИИ-инструментами',
        href: '#workshop-basics',
      },
      {
        icon: <Users size={20} />,
        iconClass: 'icon-gradient-gold',
        title: 'Менторство по ИИ',
        description: 'Индивидуальное сопровождение по ИИ для собственников и менеджеров',
        href: '#mentorship',
      },
      {
        icon: <MessageCircle size={20} />,
        iconClass: 'icon-gradient-blue',
        title: 'Telegram-Канал про ИИ',
        description: 'Новости, ИИ-кейсы и практические советы каждый день',
        href: 'https://t.me/your_channel',
      },
      {
        icon: <Send size={20} />,
        iconClass: 'icon-gradient-purple',
        title: 'Написать мне в Telegram',
        description: 'Обсудим ваш проект или задачу',
        href: 'https://t.me/your_username',
      },
      {
        icon: <User size={20} />,
        iconClass: 'icon-gradient-teal',
        title: 'Обо мне',
        description: 'Опыт работы, кейсы и достижения',
        href: '#about',
      },
    ],
    en: [
      {
        icon: <Users size={20} />,
        iconClass: 'icon-gradient-orange',
        title: 'AI for Beginners Workshop',
        description: 'Practical course on the basics of AI tools',
        href: '#workshop-basics',
      },
      {
        icon: <Users size={20} />,
        iconClass: 'icon-gradient-gold',
        title: 'AI Mentorship',
        description: 'Individual AI support for business owners and managers',
        href: '#mentorship',
      },
      {
        icon: <MessageCircle size={20} />,
        iconClass: 'icon-gradient-blue',
        title: 'AI Telegram Channel',
        description: 'News, AI cases, and practical tips every day',
        href: 'https://t.me/your_channel',
      },
      {
        icon: <Send size={20} />,
        iconClass: 'icon-gradient-purple',
        title: 'Message me on Telegram',
        description: 'Let\'s discuss your project or task',
        href: 'https://t.me/your_username',
      },
      {
        icon: <User size={20} />,
        iconClass: 'icon-gradient-teal',
        title: 'About Me',
        description: 'Work experience, cases, and achievements',
        href: '#about',
      },
    ],
  };

  // Локализованные данные для вкладки "Бизнесу"
  const businessSections = {
    ru: [
      {
        icon: <Calendar size={20} />,
        iconClass: 'icon-gradient-green',
        title: 'Назначить звонок',
        description: 'Обсудим возможности внедрения ИИ',
        href: '#call',
      },
      {
        icon: <Users size={20} />,
        iconClass: 'icon-gradient-indigo',
        title: 'Воркшоп "ИИ для команд"',
        description: 'Обучение сотрудников эффективной работе с ИИ',
        href: '#workshop-teams',
      },
      {
        icon: <Search size={20} />,
        iconClass: 'icon-gradient-gold',
        title: 'ИИ консалтинг',
        description: 'Аудит процессов и разработка стратегии внедрения ИИ',
        href: 'https://mentorclub.ru',
      },
      {
        icon: <User size={20} />,
        iconClass: 'icon-gradient-indigo',
        title: 'ИИ-помощники для руководителей',
        description: 'Персональные ИИ-ассистенты для топ-менеджмента',
        href: '#ai-assistants',
      },
      {
        icon: <FolderKanban size={20} />,
        iconClass: 'icon-gradient-teal',
        title: 'Портфолио ИИ кейсов',
        description: 'Реальные проекты с результатами от внедрения',
        href: '#portfolio',
      },
    ],
    en: [
      {
        icon: <Calendar size={20} />,
        iconClass: 'icon-gradient-green',
        title: 'Schedule a Call',
        description: 'Discuss AI implementation opportunities',
        href: '#call',
      },
      {
        icon: <Users size={20} />,
        iconClass: 'icon-gradient-indigo',
        title: 'AI for Teams Workshop',
        description: 'Training employees in effective AI use',
        href: '#workshop-teams',
      },
      {
        icon: <Search size={20} />,
        iconClass: 'icon-gradient-gold',
        title: 'AI Consulting',
        description: 'Process audit and AI implementation strategy development',
        href: 'https://mentorclub.ru',
      },
      {
        icon: <User size={20} />,
        iconClass: 'icon-gradient-indigo',
        title: 'AI Assistants for Executives',
        description: 'Personal AI assistants for top management',
        href: '#ai-assistants',
      },
      {
        icon: <FolderKanban size={20} />,
        iconClass: 'icon-gradient-teal',
        title: 'AI Case Portfolio',
        description: 'Real projects with implementation results',
        href: '#portfolio',
      },
    ],
  };

  const sections = activeTab === 'personal'
    ? personalSections[language]
    : businessSections[language];

  const copyrightText = language === 'ru'
    ? '© 2026 Прошинский Владислав'
    : '© 2026 Vladislav Proshinskiy';

  return (
    <div className="min-h-screen">
      {/* Main content */}
      <div className="container mx-auto max-w-2xl px-4 pb-12">
        {/* Profile Header */}
        <ProfileHeader language={language} onLanguageChange={setLanguage} />

        {/* Toggle Switch */}
        <ToggleSwitch activeTab={activeTab} onTabChange={setActiveTab} language={language} />

        {/* Link Cards */}
        <div className="space-y-3 mb-12">
          {sections.map((section, index) => (
            <LinkCard
              key={`${activeTab}-${language}-${index}`}
              icon={section.icon}
              iconClass={section.iconClass}
              title={section.title}
              description={section.description}
              href={section.href}
            />
          ))}
        </div>

        {/* Copyright Footer */}
        <div className="text-center pt-8 pb-4">
          <p className="text-sm text-gray-500">
            {copyrightText}
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
