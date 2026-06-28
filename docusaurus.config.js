// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Minecraft基岩版脚本开发教程 - 像素语匠',
  tagline: '一个适合于Script API新手开发者的教程文档',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://sapi-doc.pling.top/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Fanconma', // Usually your GitHub org/user name.
  projectName: 'sapi-doc', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/Fanconma/sapi-doc/tree/main', // REMEMBER TO CHANGE THIS LMAO
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },

          // editUrl:
          //   '',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: '像素语匠 SAPI 开发教程',
        logo: {
          alt: 'PixelLingual SAPI doc logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '学习SAPI',
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/Fanconma/sapi-doc/',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '常见文档',
            items: [
              {
                label: '学习SAPI',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: '像素语匠有关链接',
            items: [
              {
                label: '像素语匠',
                href: 'https://pling.top',
              },
              {
                label: 'Manifest.json编辑器',
                href: 'https://manifest.pling.top',
              },
              {
                label: 'MCTransLookup',
                href: 'https://translookup.pling.top/',
              },
            ],
          },
          {
            title: '常用链接',
            items: [
              {
                label: 'JaylyDev的SAPI文档',
                href: 'https://jaylydev.github.io/scriptapi-docs/',
              },
              {
                label: '微软SAPI文档',
                href: 'https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/?view=minecraft-bedrock-stable',
              },
              {
                label: 'bedrock\.dev',
                href: 'https://bedrock.dev/',
              },
              {
                label: 'Minecraft Wiki',
                href: 'https://zh.minecraft.wiki/'
              }
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} PixelLingual. All rights reserved. We follow CC BY-NC 4.0 license for all content on this site.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    algolia: {
      // The application ID provided by Algolia
      appId: '8GA5C7T83Z',

      // Public API key: it is safe to commit it
      apiKey: '2288de86d56ab5ab86b3bb7255a00466',

      indexName: 'Script API doc crawler',

      // Optional: see doc section below
      contextualSearch: true,

      // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
      externalUrlRegex: 'external\\.com|domain\\.com',

      // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
      replaceSearchResultPathname: {
        from: '/docs/', // or as RegExp: /\/docs\//
        to: '/',
      },

      // Optional: Algolia search parameters
      searchParameters: {},

      // Optional: path for search page that enabled by default (`false` to disable it)
      searchPagePath: 'search',

      // Optional: whether the insights feature is enabled or not on Docsearch (`false` by default)
      insights: false,

      // Optional: whether you want to use the new Ask AI feature (undefined by default)
      askAi: 'YOUR_ALGOLIA_ASK_AI_ASSISTANT_ID',

      //... other Algolia params
    },
    }),
};

export default config;
