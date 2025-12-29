import { useState } from 'react';
import { Play } from 'lucide-react';
import VideoPopup from './VideoPopup';

interface ProfileHeaderProps {
  language: 'ru' | 'en';
  onLanguageChange: (lang: 'ru' | 'en') => void;
}

export default function ProfileHeader({ language, onLanguageChange }: ProfileHeaderProps) {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const texts = {
    ru: {
      name: 'Прошинский Влад',
      bio: 'Внедряю ИИ в бизнес: то, что занимало дни и часы, работает за минуты и без ошибок'
    },
    en: {
      name: 'Proshinsky Vlad',
      bio: 'AI Business Integration Expert. Helping to effectively use AI to solve problems'
    }
  };

  const handleLanguageToggle = () => {
    onLanguageChange(language === 'ru' ? 'en' : 'ru');
  };

  return (
    <div className="text-center mb-8 pt-8 relative">
      {/* Single Language Switcher - shows current language */}
      <div className="absolute right-0 top-8">
        <button
          onClick={handleLanguageToggle}
          className="language-button px-3 py-2 rounded-xl flex items-center gap-2 transition-all duration-200 hover:scale-105"
        >
          <span className="text-lg">{language === 'ru' ? '🇬🇧' : '🇷🇺'}</span>
          <span className="text-sm font-medium text-gray-700">{language === 'ru' ? 'EN' : 'RU'}</span>
        </button>
      </div>

      {/* Avatar with white border and play button */}
      <div className="relative inline-block mb-6">
        <div className="w-32 h-32 rounded-full bg-white p-2 shadow-lg">
          <img
            src="https://ihbzndymkizrpeoawojd.supabase.co/storage/v1/object/sign/Mini%20Site/1.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV85M2IwNGYzYy0zY2RiLTQ4NjAtYWFmYy02MGVjMDYzZTNmYzIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJNaW5pIFNpdGUvMS5qcGVnIiwiaWF0IjoxNzY1NzUzODg1LCJleHAiOjIwODExMTM4ODV9.cKZEJmb8_ARoTGBvbdWYLTGaP9P_Ef8u8ARoboJZ4Oc"
            alt={texts[language].name}
            className="w-full h-full rounded-full object-cover"
          />
        </div>

        {/* YouTube-style play button */}
        <button
          onClick={() => setIsVideoOpen(true)}
          className="absolute bottom-0 right-0 bg-red-600 hover:bg-red-700 w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110"
          aria-label="Play video"
        >
          <Play className="w-6 h-6 text-white ml-0.5" fill="white" />
        </button>
      </div>

      {/* Video Popup */}
      <VideoPopup
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        videoUrl="https://www.youtube.com/watch?v=klgd0zOmYp4"
      />

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
