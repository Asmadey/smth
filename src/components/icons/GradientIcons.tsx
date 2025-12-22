// Glass/Gel style icons with soft glowing shadows
// Each icon has smooth gradients and a floating effect with colored shadows

// Personal section icons

// Workshop - Three person silhouettes (purple to blue gradient)
export const WorkshopIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="grad_workshop" x1="24" y1="0" x2="24" y2="48" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#AF52DE"/>
        <stop offset="100%" stopColor="#007AFF"/>
      </linearGradient>
      <filter id="glow_workshop" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    <g filter="url(#glow_workshop)">
      {/* Center figure (larger) */}
      <circle cx="24" cy="16" r="5" fill="url(#grad_workshop)" opacity="0.95"/>
      <path d="M24 23C19 23 16 26 16 29v5h16v-5c0-3-3-6-8-6z" fill="url(#grad_workshop)" opacity="0.95"/>

      {/* Left figure */}
      <circle cx="12" cy="18" r="4" fill="url(#grad_workshop)" opacity="0.85"/>
      <path d="M12 24C8.5 24 6 26.5 6 29v3h12v-1c0-2-1-4-3-5-1.5-0.7-3-1.5-3-2z" fill="url(#grad_workshop)" opacity="0.85"/>

      {/* Right figure */}
      <circle cx="36" cy="18" r="4" fill="url(#grad_workshop)" opacity="0.85"/>
      <path d="M36 24c3.5 0 6 2.5 6 5.5v2.5H30v-1c0-2 1-4 3-5 1.5-0.7 3-1.5 3-2z" fill="url(#grad_workshop)" opacity="0.85"/>
    </g>
  </svg>
);

// Mentorship/Consulting - Magnifying glass with gear and chart (gold-yellow to orange gradient)
export const MentorshipIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="grad_mentor" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#FFD60A"/>
        <stop offset="100%" stopColor="#FF9500"/>
      </linearGradient>
      <filter id="glow_mentor" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    <g filter="url(#glow_mentor)">
      {/* Magnifying glass */}
      <circle cx="18" cy="18" r="12" stroke="url(#grad_mentor)" strokeWidth="3" fill="none" opacity="0.95"/>
      <path d="M27 27L38 38" stroke="url(#grad_mentor)" strokeWidth="4" strokeLinecap="round" opacity="0.95"/>

      {/* Gear inside magnifying glass */}
      <circle cx="18" cy="18" r="5" fill="url(#grad_mentor)" opacity="0.9"/>
      <path d="M18 13v1m0 8v1m5-5h-1m-8 0h-1m7.5-3.5l-0.7 0.7m-5.6 5.6l-0.7 0.7m7 0l-0.7-0.7m-5.6-5.6l-0.7-0.7"
            stroke="white" strokeWidth="1.5" strokeLinecap="round"/>

      {/* Chart bars on the right */}
      <rect x="32" y="22" width="3" height="8" rx="1.5" fill="url(#grad_mentor)" opacity="0.85"/>
      <rect x="37" y="18" width="3" height="12" rx="1.5" fill="url(#grad_mentor)" opacity="0.85"/>
      <rect x="42" y="14" width="3" height="16" rx="1.5" fill="url(#grad_mentor)" opacity="0.85"/>
    </g>
  </svg>
);

// Telegram - Paper airplane (light blue to blue gradient)
export const TelegramIcon = () => (
  <svg width="38" height="38" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="grad_telegram" x1="0" y1="0" x2="512" y2="512" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#5AC8FA"/>
        <stop offset="100%" stopColor="#007AFF"/>
      </linearGradient>
      <filter id="glow_telegram" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    <g filter="url(#glow_telegram)">
      <path d="M477,43.86,13.32,223.29a5.86,5.86,0,0,0-.8.38c-3.76,2.13-30,18.18,7,32.57l.38.14,110.41,35.67a6.08,6.08,0,0,0,5.09-.62L409.25,120.57a6,6,0,0,1,2.2-.83c3.81-.63,14.78-1.81,7.84,7-7.85,10-194.9,177.62-215.66,196.21a6.3,6.3,0,0,0-2.07,4.17l-9.06,108a7.08,7.08,0,0,0,2.83,5.67,6.88,6.88,0,0,0,8.17-.62l65.6-58.63a6.09,6.09,0,0,1,7.63-.39l114.45,83.1.37.25c2.77,1.71,32.69,19.12,41.33-19.76l79-375.65c.11-1.19,1.18-14.27-8.17-22-9.82-8.08-23.72-4-25.81-3.56A6,6,0,0,0,477,43.86Z"
            fill="url(#grad_telegram)" opacity="0.95"/>
    </g>
  </svg>
);

// Message - Chat bubble (purple to pink gradient)
export const MessageIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="grad_message" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#a855f7"/>
        <stop offset="100%" stopColor="#ec4899"/>
      </linearGradient>
      <filter id="glow_message" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    <g filter="url(#glow_message)">
      <path d="M8 10c0-2.2 1.8-4 4-4h24c2.2 0 4 1.8 4 4v18c0 2.2-1.8 4-4 4H16l-8 6V10z"
            fill="url(#grad_message)" opacity="0.95"/>
      <line x1="16" y1="18" x2="32" y2="18" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      <line x1="16" y1="24" x2="28" y2="24" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    </g>
  </svg>
);

// About - User profile (teal to blue gradient)
export const AboutIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="grad_about" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#14b8a6"/>
        <stop offset="100%" stopColor="#3b82f6"/>
      </linearGradient>
      <filter id="glow_about" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    <g filter="url(#glow_about)">
      <circle cx="24" cy="16" r="8" fill="url(#grad_about)" opacity="0.95"/>
      <path d="M24 26C16 26 10 30 10 36v4h28v-4c0-6-6-10-14-10z" fill="url(#grad_about)" opacity="0.95"/>
    </g>
  </svg>
);

// Business section icons

// Phone Call - Classic phone handset (blue to teal gradient)
export const PhoneCallIcon = () => (
  <svg width="38" height="38" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="grad_phone" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#007AFF"/>
        <stop offset="100%" stopColor="#34C759"/>
      </linearGradient>
      <filter id="glow_phone" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    <g filter="url(#glow_phone)">
      {/* Phone handset - modern style */}
      <path d="M38 30c-1 2-3 4-6 4-3 0-7-1-11-3-4-2-8-5-11-9-3-4-5-8-5-11 0-3 2-5 4-6 1-1 2-1 3 0l4 6c0 1 0 2-1 3l-2 1c1 2 3 4 5 6s4 4 6 5l1-2c1-1 2-1 3-1l6 4c1 1 1 2 0 3z"
            fill="url(#grad_phone)" opacity="0.95"/>

      {/* Signal waves */}
      <path d="M32 12c2 2 3 4 3 7M28 14c1 1 2 3 2 5"
            stroke="url(#grad_phone)" strokeWidth="2" strokeLinecap="round" opacity="0.8"/>
    </g>
  </svg>
);

// Team Workshop - Three person silhouettes (purple to blue gradient)
export const TeamWorkshopIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="grad_team" x1="24" y1="0" x2="24" y2="48" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#AF52DE"/>
        <stop offset="100%" stopColor="#007AFF"/>
      </linearGradient>
      <filter id="glow_team" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    <g filter="url(#glow_team)">
      {/* Center figure (larger) */}
      <circle cx="24" cy="16" r="5" fill="url(#grad_team)" opacity="0.95"/>
      <path d="M24 23C19 23 16 26 16 29v5h16v-5c0-3-3-6-8-6z" fill="url(#grad_team)" opacity="0.95"/>

      {/* Left figure */}
      <circle cx="12" cy="18" r="4" fill="url(#grad_team)" opacity="0.85"/>
      <path d="M12 24C8.5 24 6 26.5 6 29v3h12v-1c0-2-1-4-3-5-1.5-0.7-3-1.5-3-2z" fill="url(#grad_team)" opacity="0.85"/>

      {/* Right figure */}
      <circle cx="36" cy="18" r="4" fill="url(#grad_team)" opacity="0.85"/>
      <path d="M36 24c3.5 0 6 2.5 6 5.5v2.5H30v-1c0-2 1-4 3-5 1.5-0.7 3-1.5 3-2z" fill="url(#grad_team)" opacity="0.85"/>
    </g>
  </svg>
);

// Consulting - Magnifying glass with gear and chart (gold-yellow to orange gradient)
export const ConsultingIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="grad_consulting" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#FFD60A"/>
        <stop offset="100%" stopColor="#FF9500"/>
      </linearGradient>
      <filter id="glow_consulting" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    <g filter="url(#glow_consulting)">
      {/* Magnifying glass */}
      <circle cx="18" cy="18" r="12" stroke="url(#grad_consulting)" strokeWidth="3" fill="none" opacity="0.95"/>
      <path d="M27 27L38 38" stroke="url(#grad_consulting)" strokeWidth="4" strokeLinecap="round" opacity="0.95"/>

      {/* Gear inside magnifying glass */}
      <circle cx="18" cy="18" r="5" fill="url(#grad_consulting)" opacity="0.9"/>
      <path d="M18 13v1m0 8v1m5-5h-1m-8 0h-1m7.5-3.5l-0.7 0.7m-5.6 5.6l-0.7 0.7m7 0l-0.7-0.7m-5.6-5.6l-0.7-0.7"
            stroke="white" strokeWidth="1.5" strokeLinecap="round"/>

      {/* Chart bars on the right */}
      <rect x="32" y="22" width="3" height="8" rx="1.5" fill="url(#grad_consulting)" opacity="0.85"/>
      <rect x="37" y="18" width="3" height="12" rx="1.5" fill="url(#grad_consulting)" opacity="0.85"/>
      <rect x="42" y="14" width="3" height="16" rx="1.5" fill="url(#grad_consulting)" opacity="0.85"/>
    </g>
  </svg>
);

// AI Assistant - Brain icon (blue-violet to magenta-violet gradient)
export const AIAssistantIcon = () => (
  <svg width="38" height="38" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="grad_ai" x1="24" y1="0" x2="24" y2="48" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#5856D6"/>
        <stop offset="100%" stopColor="#AF52DE"/>
      </linearGradient>
      <filter id="glow_ai" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    <g filter="url(#glow_ai)">
      {/* Brain shape */}
      <path d="M24 6c-4 0-7 2-9 5-1-1-3-1-4 0-2 1-3 3-3 5 0 1 0 2 1 3-1 1-1 2-1 3 0 2 1 4 2 5-1 1-1 3 0 4 1 2 3 3 5 3h2c2 4 5 7 9 7s7-3 9-7h2c2 0 4-1 5-3 1-1 1-3 0-4 1-1 2-3 2-5 0-1 0-2-1-3 1-1 1-2 1-3 0-2-1-4-3-5-1-1-3-1-4 0-2-3-5-5-9-5z"
            fill="url(#grad_ai)" opacity="0.95"/>

      {/* Brain details - left hemisphere */}
      <path d="M18 16c-1 0-2 1-2 2s1 2 2 2M16 22c-1 0-2 1-2 2s1 2 2 2M18 28c-1 0-2 1-2 2"
            stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>

      {/* Brain details - right hemisphere */}
      <path d="M30 16c1 0 2 1 2 2s-1 2-2 2M32 22c1 0 2 1 2 2s-1 2-2 2M30 28c1 0 2 1 2 2"
            stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>

      {/* Central details */}
      <path d="M22 18c0-1 1-2 2-2s2 1 2 2M22 24c0-1 1-2 2-2s2 1 2 2"
            stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.7"/>
    </g>
  </svg>
);

// Portfolio - Briefcase with checkmark badge (cyan to blue gradient)
export const PortfolioIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="grad_portfolio" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#5AC8FA"/>
        <stop offset="100%" stopColor="#007AFF"/>
      </linearGradient>
      <filter id="glow_portfolio" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    <g filter="url(#glow_portfolio)">
      {/* Briefcase body */}
      <rect x="6" y="16" width="36" height="22" rx="4" fill="url(#grad_portfolio)" opacity="0.95"/>

      {/* Briefcase handle */}
      <path d="M18 16v-4c0-2 1.5-4 4-4h4c2.5 0 4 2 4 4v4" stroke="url(#grad_portfolio)" strokeWidth="3"
            fill="none" opacity="0.95"/>

      {/* Center lock/clasp */}
      <rect x="22" y="22" width="4" height="6" rx="2" fill="white" opacity="0.3"/>

      {/* Checkmark badge in corner */}
      <circle cx="36" cy="32" r="6" fill="url(#grad_portfolio)" opacity="1"/>
      <circle cx="36" cy="32" r="5" fill="white" opacity="0.95"/>
      <path d="M33 32l2 2 4-4" stroke="url(#grad_portfolio)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </g>
  </svg>
);
