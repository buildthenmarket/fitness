// @ts-check
// Note: type checking is disabled for now as this is a Docusaurus v1 to v3 migration.
// @type {import('@docusaurus/types').Config}
const config = {
  title: 'Fitness Book',
  tagline: 'Your personal guide to fitness and wellness',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://fitness-book.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: '/fitness-book/',

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
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/BUILD-then-MARKET/fitness/tree/main/',
          routeBasePath: '/', // Docs at root instead of /docs
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
        title: 'Fitness Book',
        logo: {
          alt: 'Fitness Book Logo',
          src: 'img/favicon.ico',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {
            href: 'https://github.com/BUILD-then-MARKET/fitness',
            label: 'GitHub',
            position: 'right',
          },
        ],
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
