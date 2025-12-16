interface ProfileHeaderProps {
  language: 'ru' | 'en';
  onLanguageChange: (lang: 'ru' | 'en') => void;
}

export default function ProfileHeader({ language, onLanguageChange }: ProfileHeaderProps) {
  const texts = {
    ru: {
      name: 'Прошинский Владислав',
      bio: 'Эксперт по внедрению ИИ в бизнес. Помогаю эффективно использовать ИИ для решения задач'
    },
    en: {
      name: 'Vladislav Proshinskiy',
      bio: 'AI Business Integration Expert. Helping to effectively use AI to solve problems'
    }
  };

  return (
    <div className="text-center mb-8 pt-8 relative">
      {/* Language Switcher */}
      <div className="absolute right-0 top-8 flex gap-2">
        <button
          onClick={() => onLanguageChange('ru')}
          className={`language-button px-3 py-2 rounded-xl flex items-center gap-2 ${
            language === 'ru' ? 'ring-2 ring-blue-400' : ''
          }`}
        >
          <span className="text-lg">🇷🇺</span>
          <span className="text-sm font-medium text-gray-700">RU</span>
        </button>
        <button
          onClick={() => onLanguageChange('en')}
          className={`language-button px-3 py-2 rounded-xl flex items-center gap-2 ${
            language === 'en' ? 'ring-2 ring-blue-400' : ''
          }`}
        >
          <span className="text-lg">🇬🇧</span>
          <span className="text-sm font-medium text-gray-700">EN</span>
        </button>
      </div>

      {/* Avatar with white border */}
      <div className="relative inline-block mb-6">
        <div className="w-32 h-32 rounded-full bg-white p-2 shadow-lg">
          <img
            src="https://ihbzndymkizrpeoawojd.supabase.co/storage/v1/object/sign/Mini%20Site/1.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV85M2IwNGYzYy0zY2RiLTQ4NjAtYWFmYy02MGVjMDYzZTNmYzIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJNaW5pIFNpdGUvMS5qcGVnIiwiaWF0IjoxNzY1NzUzODg1LCJleHAiOjIwODExMTM4ODV9.cKZEJmb8_ARoTGBvbdWYLTGaP9P_Ef8u8ARoboJZ4Oc"
            alt={texts[language].name}
            className="w-full h-full rounded-full object-cover"
          />
        </div>
      </div>

      {/* Name */}
      <h1 className="text-3xl font-bold text-gray-800 mb-3">
        {texts[language].name}
      </h1>

      {/* Bio */}
      <p className="text-base text-gray-600 max-w-md mx-auto leading-relaxed px-4">
        {texts[language].bio}
      </p>
    </div>
  );
}
