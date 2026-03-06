// @ts-check
// @type {import('@docusaurus/types').Config}
const config = {
  title: 'Fitness Book',
  tagline: 'Workout Overview',
  favicon: 'favicon.ico',

  // Set the production url of your site here
  url: 'https://fitness.savageceos.com',
  organizationName: 'buildthenmarket',
  projectName: 'fitness',
  baseUrl: '/fitness/',
  deploymentBranch: 'gh-pages',
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
              { to: '/docs/Bodyweight', label: 'Bodyweight (Calisthenics)' },
              { to: '/docs/Dumbbells', label: 'Dumbbells' },
              { to: '/docs/Gym/Chest', label: 'Gym' },
            ],
          },
          {
            type: 'dropdown',
            position: 'left',
            label: '⚡ Cardio & Conditioning',
            items: [
              { to: '/docs/Cardio/HIIT', label: 'HIIT' },
              { to: '/docs/Cardio', label: 'Cardio' },
            ],
          },
          {
            type: 'dropdown',
            position: 'left',
            label: '🧘 Stretching',
            items: [
              { to: '/docs/Stretching/', label: 'Stretching' },
            ],
          },
          {
            type: 'dropdown',
            position: 'left',
            label: '🏀 Sports',
            items: [
              { to: '/docs/Sports/Breakdance', label: 'BBoy' },
              { to: '/docs/Sports/Basketball', label: 'Basketball' },
              { to: '/docs/Sports/MMA', label: 'MMA' },
              { to: '/docs/Sports/Boxing', label: 'BOXING' },
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
