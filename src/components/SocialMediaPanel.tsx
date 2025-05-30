import React, { useState } from 'react';

const SocialMediaPanel: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Share/Grid icon for the toggle button
  const ShareGridIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z"/>
    </svg>
  );

  // SVG Icons for each platform
  const GitHubIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  );

  const YouTubeIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  );

  const TwitterIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );

  const TwitchIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z"/>
    </svg>
  );

  const LinkedInIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/emre-selcuk/',
      icon: <LinkedInIcon />,
      color: '#0077B5'
    },
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/@EmreSelcuk_117',
      icon: <YouTubeIcon />,
      color: '#FF0000'
    },
    {
      name: 'Twitter',
      url: 'https://x.com/_boxman_117',
      icon: <TwitterIcon />,
      color: '#000000'
    },
    {
      name: 'Twitch',
      url: 'https://www.twitch.tv/emreselcuk117',
      icon: <TwitchIcon />,
      color: '#9146FF'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/EmreSelcuk1492',
      icon: <GitHubIcon />,
      color: '#333'
    }
  ];

  const togglePanel = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <style>
        {`
          .social-panel {
            position: fixed;
            left: 2rem;
            bottom: 2rem;
            z-index: 999;
            display: flex;
            flex-direction: column;
            align-items: center;
            transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          }

          .social-toggle {
            width: 70px;
            height: 70px;
            background: var(--color-bg-tertiary);
            border: 2px solid var(--color-border);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: var(--shadow-xl);
            backdrop-filter: var(--backdrop-blur);
            order: 2;
            color: var(--color-text-primary);
          }

          .social-toggle:hover {
            transform: scale(1.1);
            box-shadow: var(--shadow-2xl);
            color: var(--color-accent-light);
          }

          .social-links {
            display: flex;
            flex-direction: column;
            gap: 12px;
            margin-bottom: 16px;
            opacity: ${isExpanded ? '1' : '0'};
            visibility: ${isExpanded ? 'visible' : 'hidden'};
            transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
            transform: ${isExpanded ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.8)'};
            order: 1;
          }

          .social-link {
            width: 55px;
            height: 55px;
            background: var(--color-bg-tertiary);
            border: 2px solid var(--color-border);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            text-decoration: none;
            transition: all 0.3s ease;
            box-shadow: var(--shadow-lg);
            backdrop-filter: var(--backdrop-blur);
            position: relative;
            overflow: hidden;
            color: var(--color-text-primary);
          }

          .social-link:hover {
            transform: scale(1.1);
            box-shadow: var(--shadow-xl);
            color: var(--color-accent-light);
          }

          .social-link::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%);
            opacity: 0;
            transition: opacity 0.3s ease;
          }

          .social-link:hover::before {
            opacity: 1;
          }

          .social-link svg {
            transition: all 0.3s ease;
          }

          .social-link:hover svg {
            transform: scale(1.1);
          }

          .social-tooltip {
            position: absolute;
            left: 120%;
            top: 50%;
            transform: translateY(-50%);
            background: var(--color-bg-secondary);
            color: var(--color-text-primary);
            padding: 6px 12px;
            border-radius: 8px;
            font-size: 12px;
            font-weight: 500;
            white-space: nowrap;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            border: 1px solid var(--color-border);
            box-shadow: var(--shadow-lg);
          }

          .social-link:hover .social-tooltip {
            opacity: 1;
            visibility: visible;
            transform: translateY(-50%) translateX(4px);
          }

          @media (max-width: 768px) {
            .social-panel {
              left: 1rem;
              bottom: 1rem;
            }
            
            .social-toggle {
              width: 60px;
              height: 60px;
            }
            
            .social-links {
              gap: 10px;
              margin-bottom: 14px;
            }
            
            .social-link {
              width: 45px;
              height: 45px;
            }

            .social-link svg {
              width: 16px;
              height: 16px;
            }

            .social-tooltip {
              left: 110%;
              font-size: 10px;
              padding: 4px 8px;
            }
          }
        `}
      </style>
      
      <div className="social-panel">
        <div className="social-links">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              {social.icon}
              <div className="social-tooltip">{social.name}</div>
            </a>
          ))}
        </div>
        
        <button className="social-toggle" onClick={togglePanel}>
          {isExpanded ? '✕' : <ShareGridIcon />}
        </button>
      </div>
    </>
  );
};

export default SocialMediaPanel; 