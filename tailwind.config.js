module.exports = {
  purge: ['./components/**/*.js', './pages/**/*.js'],
  theme: {
    extend: {
      colors: {
        'accent-1': '#FAFAFA',
        'accent-2': '#EAEAEA',
        'accent-7': '#333',
        success: '#0070f3',
        cyan: '#79FFE1',
        // UT Brand Colors http://utw10776.utweb.utexas.edu/core-brand/colors/
        'ut-burntorange': '#bf5700',
        'ut-charcoal': '#333f48',
        'ut-white': '#fff',
        'ut-tangerine': '#f8971f',
        'ut-sunshine': '#ffd600',
        'ut-cactus': '#a6cd57',
        'ut-turtlepond': '#579d42',
        'ut-turquoise': '#00a9b7',
        'ut-bluebonnet': '#005f86',
        'ut-limestone': '#d6d2c4',
        'ut-shade': '#9cadb7',
        'ut-shade--t20': '#f9fafb',
        'ut-charcoal--s40': '#1f262b'
      },
      spacing: {
        28: '7rem',
      },
      letterSpacing: {
        tighter: '-.04em',
      },
      lineHeight: {
        tight: 1.2,
      },
      fontSize: {
        '5xl': '2.5rem',
        '6xl': '2.75rem',
        '7xl': '4.5rem',
        '8xl': '6.25rem',
      },
      boxShadow: {
        sm: '0 5px 10px rgba(0, 0, 0, 0.12)',
        md: '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
    },
  },
}
