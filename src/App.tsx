import { useState, useEffect } from 'react';
import ProfileHeader from './components/ProfileHeader';
import ToggleSwitch from './components/ToggleSwitch';
import LinkCard from './components/LinkCard';
import {
  WorkshopIcon,
  MentorshipIcon,
  TelegramIcon,
  MessageIcon,
  AboutIcon,
  PhoneCallIcon,
  TeamWorkshopIcon,
  ConsultingIcon,
  AIAssistantIcon,
  PortfolioIcon
} from './components/icons/GradientIcons';

function App() {
  const [activeTab, setActiveTab] = useState<'personal' | 'business'>('personal');
  const [language, setLanguage] = useState<'ru' | 'en'>('ru');
  const [animateCards, setAnimateCards] = useState(true);

  // Триггер анимации при переключении вкладок
  useEffect(() => {
    setAnimateCards(false);
    const timer = setTimeout(() => {
      setAnimateCards(true);
    }, 50);
    return () => clearTimeout(timer);
  }, [activeTab]);

  // Локализованные данные для вкладки "Частным лицам"
  const personalSections = {
    ru: [
      {
        icon: <WorkshopIcon />,
        iconClass: '',
        title: 'Курс «ИИ для чайников»',
        description: 'Практический курс по основам работы с ИИ-инструментами',
        href: '#workshop-basics',
      },
      {
        icon: <MentorshipIcon />,
        iconClass: '',
        title: 'Менторство по ИИ',
        description: 'Автоматизируем вашу рутину с ИИ',
        href: '#mentorship',
      },
      {
        icon: <TelegramIcon />,
        iconClass: '',
        title: 'Telegram-Канал про ИИ',
        description: 'Новости, кейсы и практические советы',
        href: 'https://t.me/AImademyday',
      },
      {
        icon: <MessageIcon />,
        iconClass: '',
        title: 'Написать мне в Telegram',
        description: 'Обсудим ваш проект или задачу',
        href: 'https://t.me/asmadeyi',
      },
      {
        icon: <AboutIcon />,
        iconClass: '',
        title: 'Обо мне',
        description: 'Опыт работы, кейсы и достижения',
        href: '#about',
      },
    ],
    en: [
      {
        icon: <WorkshopIcon />,
        iconClass: '',
        title: 'AI for Beginners Course',
        description: 'Practical course on the basics of AI tools',
        href: '#workshop-basics',
      },
      {
        icon: <MentorshipIcon />,
        iconClass: '',
        title: 'AI Mentorship',
        description: 'Automate your routine with AI',
        href: '#mentorship',
      },
      {
        icon: <TelegramIcon />,
        iconClass: '',
        title: 'AI Telegram Channel',
        description: 'News, cases, and practical tips',
        href: 'https://t.me/AImademyday',
      },
      {
        icon: <MessageIcon />,
        iconClass: '',
        title: 'Message me on Telegram',
        description: 'Let\'s discuss your project or task',
        href: 'https://t.me/asmadeyi',
      },
      {
        icon: <AboutIcon />,
        iconClass: '',
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
        icon: <PhoneCallIcon />,
        iconClass: '',
        title: 'Назначить звонок',
        description: 'Обсудим возможности внедрения ИИ',
        href: 'https://cal.com/proshinsky/15min',
      },
      {
        icon: <TeamWorkshopIcon />,
        iconClass: '',
        title: 'Обучение команд',
        description: 'ИИ-навыки для роста эффективности сотрудников',
        href: '#workshop-teams',
      },
      {
        icon: <ConsultingIcon />,
        iconClass: '',
        title: 'ИИ консалтинг',
        description: 'Аудит процессов и разработка стратегии внедрения ИИ',
        href: 'https://mentorclub.ru',
      },
      {
        icon: <AIAssistantIcon />,
        iconClass: '',
        title: 'ИИ-агенты для руководителей',
        description: 'Автоматизация рутины топ-менеджеров',
        href: '#ai-assistants',
      },
      {
        icon: <PortfolioIcon />,
        iconClass: '',
        title: 'Портфолио ИИ кейсов',
        description: 'Реальные проекты с результатами от внедрения',
        href: '#portfolio',
      },
    ],
    en: [
      {
        icon: <PhoneCallIcon />,
        iconClass: '',
        title: 'Schedule a Call',
        description: 'Discuss AI implementation opportunities',
        href: '#call',
      },
      {
        icon: <TeamWorkshopIcon />,
        iconClass: '',
        title: 'AI for Teams Workshop',
        description: 'Training employees in effective AI use',
        href: '#workshop-teams',
      },
      {
        icon: <ConsultingIcon />,
        iconClass: '',
        title: 'AI Consulting',
        description: 'Process audit and AI implementation strategy development',
        href: 'https://mentorclub.ru',
      },
      {
        icon: <AIAssistantIcon />,
        iconClass: '',
        title: 'AI Assistants for Executives',
        description: 'Personal AI assistants for top management',
        href: '#ai-assistants',
      },
      {
        icon: <PortfolioIcon />,
        iconClass: '',
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
    ? '© 2026 Прошинский Влад'
    : '© 2026 Proshinsky Vlad';

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
            <div key={`${activeTab}-${language}-${index}`} className={animateCards ? 'card-animate' : ''}>
              <LinkCard
                icon={section.icon}
                iconClass={section.iconClass}
                title={section.title}
                description={section.description}
                href={section.href}
              />
            </div>
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
