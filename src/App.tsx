import { useState } from 'react';
import { BookOpen, Link2, Send, User, Phone, Users, Briefcase, FolderKanban, MessageCircle } from 'lucide-react';
import ProfileHeader from './components/ProfileHeader';
import ToggleSwitch from './components/ToggleSwitch';
import LinkCard from './components/LinkCard';

function App() {
  const [activeTab, setActiveTab] = useState<'personal' | 'business'>('personal');

  // Данные для вкладки "Частным лицам"
  const personalSections = [
    {
      icon: <BookOpen size={24} />,
      title: 'Воркшоп "ИИ для чайников"',
      description: 'Практический курс по основам работы с ИИ-инструментами',
      href: '#workshop-basics',
    },
    {
      icon: <Link2 size={24} />,
      title: 'Менторство по ИИ для продактов',
      description: 'Индивидуальное сопровождение для продуктовых менеджеров',
      href: '#mentorship',
    },
    {
      icon: <MessageCircle size={24} />,
      title: 'Telegram-Канал про ИИ',
      description: 'Новости, кейсы и практические советы каждый день',
      href: 'https://t.me/your_channel',
    },
    {
      icon: <Send size={24} />,
      title: 'Написать мне в Telegram',
      description: 'Обсудим ваш проект или задачу',
      href: 'https://t.me/your_username',
    },
    {
      icon: <User size={24} />,
      title: 'Обо мне',
      description: 'Опыт работы, кейсы и достижения',
      href: '#about',
    },
  ];

  // Данные для вкладки "Бизнесу"
  const businessSections = [
    {
      icon: <Phone size={24} />,
      title: 'Назначить звонок',
      description: 'Обсудим возможности внедрения ИИ в вашу компанию',
      href: '#call',
    },
    {
      icon: <Users size={24} />,
      title: 'Воркшоп "ИИ для команд"',
      description: 'Обучение сотрудников эффективной работе с ИИ',
      href: '#workshop-teams',
    },
    {
      icon: <Briefcase size={24} />,
      title: 'ИИ консалтинг',
      description: 'Аудит процессов и разработка стратегии внедрения ИИ',
      href: 'https://mentorclub.ru',
    },
    {
      icon: <Users size={24} />,
      title: 'ИИ-помощники для руководителей',
      description: 'Персональные ассистенты на базе GPT для топ-менеджмента',
      href: '#ai-assistants',
    },
    {
      icon: <FolderKanban size={24} />,
      title: 'Портфолио ИИ кейсов',
      description: 'Реальные проекты и результаты внедрения',
      href: '#portfolio',
    },
  ];

  const sections = activeTab === 'personal' ? personalSections : businessSections;

  return (
    <div className="min-h-screen relative">
      {/* Decorative orbs */}
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />

      {/* Language button */}
      <div className="fixed top-6 right-6 z-50">
        <button className="glass-button px-4 py-2 rounded-xl font-semibold text-sm text-text-primary">
          EN
        </button>
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto max-w-2xl px-4 py-12">
        {/* Profile Header */}
        <ProfileHeader />

        {/* Toggle Switch */}
        <ToggleSwitch activeTab={activeTab} onTabChange={setActiveTab} />

        {/* Link Cards */}
        <div className="space-y-3 mb-8">
          {sections.map((section, index) => (
            <LinkCard
              key={`${activeTab}-${index}`}
              icon={section.icon}
              title={section.title}
              description={section.description}
              href={section.href}
            />
          ))}
        </div>

        {/* Footer */}
        <footer className="glass-footer rounded-2xl py-6 text-center">
          <p className="text-sm text-text-secondary">
            © 2026 Прошинский Владислав
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
