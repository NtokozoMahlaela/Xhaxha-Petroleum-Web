/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // Corporate Colors
        'petroleum': {
          'navy': '#0f1a3d',      // Authority, Trust
          'blue': '#1d4ed8',      // Stability, Professionalism
          'steel': '#334155',     // Strength, Reliability
          'amber': '#f59e0b',     // Energy, Caution, Innovation
          'green': '#059669',     // Environmental Responsibility
          'silver': '#cbd5e1',    // Technology, Precision
        },
        // Primary Color Scale
        primary: {
          50: '#f0f5ff',
          100: '#e0eaff',
          200: '#c7d7fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#0f1a3d', // petroleum-navy
          950: '#0b1229',
        },
        // Secondary Color Scale
        secondary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155', // industrial-steel
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
        // Accent Colors
        accent: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b', // safety-amber
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        // Success/Environmental Colors
        success: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#059669', // environment-green
          600: '#047857',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
        },
        // Custom Gradients
        gradient: {
          primary: 'linear-gradient(135deg, #1d4ed8 0%, #1e3a8a 100%)',
          secondary: 'linear-gradient(135deg, #64748b 0%, #334155 100%)',
          accent: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
          industrial: 'linear-gradient(135deg, #1e3a8a 0%, #0f172a 100%)',
          oil: 'linear-gradient(45deg, #1e3a8a 0%, #3b82f6 25%, #64748b 50%, #1e3a8a 75%, #0f172a 100%)',
          metal: 'linear-gradient(135deg, #64748b 0%, #475569 50%, #334155 100%)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Montserrat', 'system-ui', 'sans-serif'],
        industrial: ['Orbitron', 'monospace'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
        '144': '36rem',
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'DEFAULT': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        'inner': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        'industrial': '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)',
        'industrial-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.4), 0 4px 6px -2px rgba(0, 0, 0, 0.3)',
        'industrial-xl': '0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 10px 10px -5px rgba(0, 0, 0, 0.4)',
        'oil-glow': '0 0 20px rgba(59, 130, 246, 0.3)',
        'accent-glow': '0 0 25px rgba(245, 158, 11, 0.4)',
      },
      backgroundImage: {
        'oil-slick': 'linear-gradient(45deg, #1e3a8a 0%, #3b82f6 25%, #64748b 50%, #1e3a8a 75%, #0f172a 100%)',
        'industrial-texture': 'linear-gradient(45deg, transparent 48%, rgba(30, 58, 138, 0.1) 50%, transparent 52%)',
        'metal-grid': 'linear-gradient(rgba(100, 116, 139, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(100, 116, 139, 0.1) 1px, transparent 1px)',
        'carbon-fiber': 'linear-gradient(27deg, #151515 5px, transparent 5px) 0 5px, linear-gradient(207deg, #151515 5px, transparent 5px) 10px 0px, linear-gradient(27deg, #222 5px, transparent 5px) 0px 10px, linear-gradient(207deg, #222 5px, transparent 5px) 10px 5px, linear-gradient(90deg, #1b1b1b 10px, transparent 10px), linear-gradient(#1d1d1d 25%, #1a1a1a 25%, #1a1a1a 50%, transparent 50%, transparent 75%, #242424 75%, #242424)',
        'pipeline': 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(30, 58, 138, 0.1) 10px, rgba(30, 58, 138, 0.1) 20px)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'oil-shimmer': 'oil-shimmer 3s ease infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 3s infinite',
        'spin-slow': 'spin 3s linear infinite',
        'industrial-pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-10px) rotate(1deg)' },
        },
        'oil-shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      borderRadius: {
        'none': '0',
        'sm': '0.125rem',
        'DEFAULT': '0.25rem',
        'md': '0.375rem',
        'lg': '0.5rem',
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
        'full': '9999px',
        'industrial': '0.25rem',
      },
      borderWidth: {
        'DEFAULT': '1px',
        '0': '0',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '6': '6px',
        '8': '8px',
      },
      opacity: {
        '0': '0',
        '5': '0.05',
        '10': '0.1',
        '20': '0.2',
        '25': '0.25',
        '30': '0.3',
        '40': '0.4',
        '50': '0.5',
        '60': '0.6',
        '70': '0.7',
        '75': '0.75',
        '80': '0.8',
        '90': '0.9',
        '95': '0.95',
        '100': '1',
      },
      zIndex: {
        '0': '0',
        '10': '10',
        '20': '20',
        '30': '30',
        '40': '40',
        '50': '50',
        '25': '25',
        '50': '50',
        '75': '75',
        '100': '100',
        'auto': 'auto',
      },
      screens: {
        'xs': '475px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        '3xl': '1920px',
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
        'transform': 'transform',
        'opacity': 'opacity',
        'colors': 'color, background-color, border-color, text-decoration-color, fill, stroke',
        'all': 'all',
      },
      transitionDuration: {
        'DEFAULT': '150ms',
        '75': '75ms',
        '100': '100ms',
        '150': '150ms',
        '200': '200ms',
        '300': '300ms',
        '500': '500ms',
        '700': '700ms',
        '1000': '1000ms',
      },
      transitionTimingFunction: {
        'DEFAULT': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'linear': 'linear',
        'in': 'cubic-bezier(0.4, 0, 1, 1)',
        'out': 'cubic-bezier(0, 0, 0.2, 1)',
        'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'industrial': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },
      scale: {
        '95': '0.95',
        '105': '1.05',
      },
      rotate: {
        '1': '1deg',
        '2': '2deg',
        '3': '3deg',
        '6': '6deg',
        '12': '12deg',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active', 'disabled'],
      textColor: ['active', 'disabled'],
      opacity: ['disabled'],
      cursor: ['disabled'],
      borderColor: ['active', 'disabled'],
      boxShadow: ['active', 'hover', 'focus'],
      transform: ['hover', 'focus'],
      scale: ['hover', 'active', 'group-hover'],
      rotate: ['hover', 'group-hover'],
      animation: ['hover', 'group-hover'],
      display: ['group-hover'],
      visibility: ['group-hover'],
    },
  },
  plugins: [
    function({ addUtilities, addComponents, theme }) {
      // Add custom utilities
      const newUtilities = {
        '.text-shadow': {
          textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        },
        '.text-shadow-lg': {
          textShadow: '0 4px 8px rgba(0, 0, 0, 0.12), 0 2px 4px rgba(0, 0, 0, 0.08)',
        },
        '.text-shadow-none': {
          textShadow: 'none',
        },
        '.industrial-text': {
          background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        },
        '.oil-text': {
          background: 'linear-gradient(45deg, #1e3a8a, #3b82f6, #64748b, #1e3a8a)',
          backgroundSize: '400% 400%',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          animation: 'oil-shimmer 4s ease infinite',
        },
      }

      // Add custom components
      const newComponents = {
        '.btn-industrial': {
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0.75rem 1.5rem',
          borderRadius: '0.375rem',
          fontWeight: '600',
          transition: 'all 0.3s ease',
          textAlign: 'center',
          border: '1px solid',
          fontFamily: theme('fontFamily.mono'),
          textTransform: 'uppercase',
          letterSpacing: '0.5px',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: '0',
            left: '-100%',
            width: '100%',
            height: '100%',
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
            transition: 'left 0.5s',
          },
          '&:hover::before': {
            left: '100%',
          },
        },
        '.card-industrial': {
          backgroundColor: theme('colors.white'),
          borderRadius: '0.5rem',
          boxShadow: theme('boxShadow.lg'),
          border: `1px solid ${theme('colors.gray.200')}`,
          transition: 'all 0.3s ease',
          overflow: 'hidden',
          '&:hover': {
            transform: 'translateY(-0.5rem)',
            boxShadow: theme('boxShadow.xl'),
            borderColor: theme('colors.primary.500'),
          },
        },
        '.industrial-border': {
          border: `2px solid ${theme('colors.secondary.500')}`,
          borderRadius: '0.25rem',
          boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.1)',
        },
        '.metal-texture': {
          background: `linear-gradient(135deg, ${theme('colors.secondary.500')} 0%, ${theme('colors.secondary.600')} 50%, ${theme('colors.secondary.700')} 100%),
          repeating-linear-gradient(45deg, transparent, transparent 5px, rgba(255,255,255,0.1) 5px, rgba(255,255,255,0.1) 10px)`,
        },
      }

      addUtilities(newUtilities, ['responsive', 'hover'])
      addComponents(newComponents)
    },
  ],
}