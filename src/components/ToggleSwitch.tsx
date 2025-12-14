interface ToggleSwitchProps {
  activeTab: 'personal' | 'business';
  onTabChange: (tab: 'personal' | 'business') => void;
}

export default function ToggleSwitch({ activeTab, onTabChange }: ToggleSwitchProps) {
  return (
    <div className="glass-toggle rounded-[20px] p-1.5 flex gap-1.5 mb-6">
      <button
        onClick={() => onTabChange('personal')}
        className={`
          flex-1 py-3 px-6 rounded-2xl font-semibold text-sm
          transition-all duration-300 ease-out
          ${
            activeTab === 'personal'
              ? 'gradient-accent text-white shadow-lg'
              : 'text-text-primary hover:bg-white/40'
          }
        `}
      >
        Частным лицам
      </button>
      <button
        onClick={() => onTabChange('business')}
        className={`
          flex-1 py-3 px-6 rounded-2xl font-semibold text-sm
          transition-all duration-300 ease-out
          ${
            activeTab === 'business'
              ? 'gradient-accent text-white shadow-lg'
              : 'text-text-primary hover:bg-white/40'
          }
        `}
      >
        Бизнесу
      </button>
    </div>
  );
}
