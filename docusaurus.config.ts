// @ts-check
// @type {import('@docusaurus/types').Config}
const config = {
  title: 'Fitness Book',
  tagline: 'Your personal guide to fitness and wellness',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://fitness-book.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: '/',

  // GitHub pages deployment config.
  organizationName: 'Build then Market Tech',
  projectName: 'test-site',

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
          sidebarPath: './sidebars.ts',
          // editUrl: 'https://github.com/BUILD-then-MARKET/fitness/tree/main/',
          // routeBasePath: '/',

        },
        blog: false, // Disabled
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        logo: {
          alt: 'Fitness Book Logo',
          src: 'static/img/favicon.ico',
        },
        items: [
            {
              type: 'dropdown',
              position: 'left',
              label: '🏋️ Strength Training',
              items: [
                { to: '/docs/lifting', label: 'Lifting' },
                { to: '/docs/calisthenics', label: 'Calisthenics' },
                { to: '/docs/minimal-equipment-workout', label: 'Minimal Equipment Workout' },
                { to: '/docs/kettlebell', label: 'Kettlebell' },
                { to: '/docs/medicine-ball', label: 'Medicine Ball' },
                { to: '/docs/compound-moves', label: 'Compound Moves' },
              ],
            },
            {
              type: 'dropdown',
              position: 'left',
              label: 'Muscle Groups',
              items: [
                { to: '/docs/chest-pecs', label: 'Chest Pecs' },
                { to: '/docs/legs', label: 'Legs' },
                { to: '/docs/shoulders-neck-upper-back', label: 'Shoulders, Neck, Upper Back' },
                { to: '/docs/lower-back-hips-glutes', label: 'Lower Back, Hips, Glutes' },
                { to: '/docs/wrists', label: 'Wrists' },
                { to: '/docs/arms', label: 'Arms' },
                { to: '/docs/core', label: 'Core' },
              ],
            },
            {
              type: 'dropdown',
              position: 'left',
              label: '⚡ Cardio & Conditioning',
              items: [
                { to: '/docs/hiit', label: 'HIIT' },
                { to: '/docs/bboy', label: 'BBoy' },
                { to: '/docs/cardio', label: 'Cardio' },
              ],
            },
            {
              type: 'dropdown',
              position: 'left',
              label: '🥊 Combat Sports',
              items: [
                { to: '/docs/boxing', label: 'BOXING' },
                { to: '/docs/mma', label: 'MMA' },
                { to: '/docs/basketball', label: 'Basketball' },
              ],
            },
            {
              type: 'dropdown',
              position: 'left',
              label: '🧘 Flexibility & Recovery',
              items: [
                { to: '/docs/flexibility', label: 'Flexibility' },
                { to: '/docs/stretching', label: 'STRETCHING' },
                { to: '/docs/dance', label: 'Dance' },
              ],
            },
          // {
          //   type: 'docSidebar',
          //   sidebarId: 'fitnessSidebar',
          //   position: 'left',
          //   label: 'Documentation',
          // },
          {
            href: 'https://github.com/BUILD-then-MARKET/fitness',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      docs:{
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
