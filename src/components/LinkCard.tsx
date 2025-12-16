import { ChevronRight } from 'lucide-react';

interface LinkCardProps {
  icon: React.ReactNode;
  iconColor: string;
  title: string;
  description?: string;
  onClick?: () => void;
  href?: string;
}

export default function LinkCard({ icon, iconColor, title, description, onClick, href }: LinkCardProps) {
  const content = (
    <>
      <div className="flex items-center gap-4 flex-1">
        <div
          className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white"
          style={{ backgroundColor: iconColor }}
        >
          {icon}
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-base font-semibold text-gray-900 leading-tight">
            {title}
          </div>
          {description && (
            <div className="text-sm text-gray-600 mt-1 leading-snug">
              {description}
            </div>
          )}
        </div>
      </div>
      <ChevronRight className="flex-shrink-0 w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors duration-200" />
    </>
  );

  const baseClasses = "white-card w-full px-5 py-4 flex items-center justify-between gap-3 group";

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
