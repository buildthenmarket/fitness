// @ts-check
// @type {import('@docusaurus/types').Config}
const config = {
  title: 'Fitness Book',
  tagline: 'Workout Overview',
  favicon: 'favicon.ico',

  // Set the production url of your site here
  url: 'https://fitness-book.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: '/',

  // GitHub pages deployment config.
  organizationName: 'Build then Market Tech',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.ts'
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],
  plugins: [['@easyops-cn/docusaurus-search-local', { hashed: true, indexDocs: true, indexBlog: false, indexPages: true, },],],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Fitness Book',
        logo: {
          alt: 'Fitness Book Logo',
          src: 'favicon.ico',
        },
        items: [
          {
            type: 'dropdown',
            position: 'left',
            label: '🏋️ Strength Training',
            items: [
              { to: '/docs/lift/Lifting', label: 'Lifting' },
              { to: '/docs/lift/Calisthenics', label: 'Calisthenics' },
              { to: '/docs/lift/minimal-equipment-workout', label: 'Minimal Equipment Workout' },
              { to: '/docs/lift/Kettlebell', label: 'Kettlebell' },
              { to: '/docs/lift/medicine-ball', label: 'Medicine Ball' },
              { to: '/docs/lift/compound-moves', label: 'Compound Moves' },
            ],
          },
          {
            type: 'dropdown',
            position: 'left',
            label: '🦵🏾 Muscle Groups',
            items: [
              { to: '/docs/muscle-groups/chest-pecs', label: 'Chest Pecs' },
              { to: '/docs/muscle-groups/Legs', label: 'Legs' },
              { to: '/docs/muscle-groups/shoulders-neck-upper-back', label: 'Shoulders, Neck, Upper Back' },
              { to: '/docs/muscle-groups/lower-back-hips-glutes', label: 'Lower Back, Hips, Glutes' },
              { to: '/docs/muscle-groups/Wrists', label: 'Wrists' },
              { to: '/docs/muscle-groups/Arms', label: 'Arms' },
              { to: '/docs/muscle-groups/Core', label: 'Core' },
            ],
          },
          {
            type: 'dropdown',
            position: 'left',
            label: '⚡ Cardio & Conditioning',
            items: [
              { to: '/docs/cardio/HIIT', label: 'HIIT' },
              { to: '/docs/sports/BBoy', label: 'BBoy' },
              { to: '/docs/cardio/Cardio', label: 'Cardio' },
            ],
          },
          {
            type: 'dropdown',
            position: 'left',
            label: '🏀 Sports',
            items: [
              { to: '/docs/sports/Basketball', label: 'Basketball' },
              { to: '/docs/sports/MMA', label: 'MMA' },
              { to: '/docs/sports/Boxing', label: 'BOXING' },
            ],
          },
          {
            type: 'dropdown',
            position: 'left',
            label: '🧘 Flexibility & Recovery',
            items: [
              { to: '/docs/yoga/Flexibility', label: 'Flexibility' },
              { to: '/docs/yoga', label: 'Stretching' },
            ],
          },
          {
            href: 'https://github.com/BUILD-then-MARKET/fitness',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Build then Market Tech.`,
      },
      prism: {
        theme: require('prism-react-renderer').themes.github,
        darkTheme: require('prism-react-renderer').themes.dracula,
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
    }),
};

module.exports = config;
