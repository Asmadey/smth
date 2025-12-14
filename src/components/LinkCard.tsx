import { ChevronRight } from 'lucide-react';

interface LinkCardProps {
  icon: React.ReactNode;
  title: string;
  description?: string;
  onClick?: () => void;
  href?: string;
}

export default function LinkCard({ icon, title, description, onClick, href }: LinkCardProps) {
  const content = (
    <>
      <div className="flex items-center gap-4 flex-1">
        <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center text-accent-blue transition-colors duration-200">
          {icon}
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-base font-semibold text-text-primary leading-tight">
            {title}
          </div>
          {description && (
            <div className="text-sm text-text-secondary mt-0.5 leading-snug">
              {description}
            </div>
          )}
        </div>
      </div>
      <ChevronRight className="flex-shrink-0 w-5 h-5 text-gray-400 group-hover:text-accent-blue transition-colors duration-200" />
    </>
  );

  const baseClasses = "glass-card w-full px-5 py-4 rounded-2xl flex items-center justify-between gap-3 group";

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={baseClasses}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={baseClasses}
    >
      {content}
    </button>
  );
}
