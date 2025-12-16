interface ToggleSwitchProps {
  activeTab: 'personal' | 'business';
  onTabChange: (tab: 'personal' | 'business') => void;
}

export default function ToggleSwitch({ activeTab, onTabChange }: ToggleSwitchProps) {
  return (
    <div className="white-toggle p-1.5 flex gap-1.5 mb-6">
      <button
        onClick={() => onTabChange('personal')}
        className={`
          flex-1 py-3 px-6 rounded-xl font-medium text-sm
          transition-all duration-200 ease-out
          ${
            activeTab === 'personal'
              ? 'bg-white text-gray-900 shadow-md'
              : 'text-gray-500 hover:text-gray-700'
          }
        `}
      >
        Частным лицам
      </button>
      <button
        onClick={() => onTabChange('business')}
        className={`
          flex-1 py-3 px-6 rounded-xl font-medium text-sm
          transition-all duration-200 ease-out
          ${
            activeTab === 'business'
              ? 'bg-white text-gray-900 shadow-md'
              : 'text-gray-500 hover:text-gray-700'
          }
        `}
      >
        Бизнесу
      </button>
    </div>
  );
}
