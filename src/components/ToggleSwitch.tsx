interface ToggleSwitchProps {
  activeTab: 'personal' | 'business';
  onTabChange: (tab: 'personal' | 'business') => void;
  language: 'ru' | 'en';
}

export default function ToggleSwitch({ activeTab, onTabChange, language }: ToggleSwitchProps) {
  const texts = {
    ru: {
      personal: 'Частным лицам',
      business: 'Бизнесу'
    },
    en: {
      personal: 'For Individuals',
      business: 'For Business'
    }
  };

  return (
    <div className="glass-toggle p-1.5 flex gap-1.5 mb-6">
      <button
        onClick={() => onTabChange('personal')}
        className={`
          flex-1 py-3 px-6 rounded-xl font-medium text-sm
          transition-all duration-200 ease-out
          ${
            activeTab === 'personal'
              ? 'glass-active text-gray-900'
              : 'text-gray-500 hover:text-gray-700'
          }
        `}
      >
        {texts[language].personal}
      </button>
      <button
        onClick={() => onTabChange('business')}
        className={`
          flex-1 py-3 px-6 rounded-xl font-medium text-sm
          transition-all duration-200 ease-out
          ${
            activeTab === 'business'
              ? 'glass-active text-gray-900'
              : 'text-gray-500 hover:text-gray-700'
          }
        `}
      >
        {texts[language].business}
      </button>
    </div>
  );
}
