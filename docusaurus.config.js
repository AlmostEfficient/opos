// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Only Possible On Solana',
  tagline: 'Explore things that are only possible on Solana',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://opos.wtf',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  organizationName: 'almostefficient',
  projectName: 'opos', 

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
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
          sidebarPath: false,
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/AlmostEfficient/opos',
          routeBasePath: '/',
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      // image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: 'Only Possible on Solana',
        logo: {
          alt: 'OPOS Logo',
          src: 'img/emoji-thinking.gif',
        },
        items: [
          // {
          //   type: 'docSidebar',
          //   sidebarId: 'tutorialSidebar',
          //   position: 'left',
          //   label: 'Tutorial',
          // },
          // {to: '/blog', label: 'Blog', position: 'left'},
          // {
          //   href: 'https://github.com/facebook/docusaurus',
          //   label: 'GitHub',
          //   position: 'right',
          // },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Solana Developer Portal',
                href: 'http://solana.com/developers',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Exchange',
                href: 'https://solana.stackexchange.com/',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/8kqgQTYbGy',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/lamportDAO',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'SolDev Solana Course',
                href: 'https://www.soldev.app/course',
              },
              {
                label: 'Solana Cookbook',
                href: 'https://solanacookbook.com/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Glass Chewers, Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
