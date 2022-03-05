/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */


/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'MetaEditor for Unreal Engine',
  tagline: `MetaEditor — helps integrate Unreal Engine v.5 in the browser. Allows you to send commands and get callbacks from the stream server with launched Unreal Engine.`,

  url: 'https://metaeditor.io',
  baseUrl: '/',

  // # for gh-pages
  // url: 'https://markolofsen.github.io',
  // baseUrl: '/unrealos_doc/',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'markolofsen', // Usually your GitHub org/user name.
  projectName: 'unrealos_doc', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'MetaEditor',
      logo: {
        alt: 'MetaEditor',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'https://ps.metaeditor.io', label: 'Demo', position: 'left'},
        {to: 'blog', label: 'Blog', position: 'left'},
        // Please keep GitHub link to the right for consistency.
        {
          href: 'https://unrealos.com',
          label: 'unrealos.com',
          position: 'right',
        },
        // {
        //   href: 'https://github.com/markolofsen/pixel-streaming',
        //   label: 'GitHub',
        //   position: 'right',
        // },
        // {
        //   href: 'https://www.npmjs.com/package/pixel-streaming',
        //   label: 'NPM',
        //   position: 'right',
        // },

      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Learn',
          items: [
            {
              label: 'Documentation',
              to: 'docs/',
            },
            // {
            //   label: 'Second Doc',
            //   to: 'docs/doc2',
            // },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/metaeditor',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/metaeditor',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/metaeditor',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/metaeditor',
            },
          ],
        },
        // {
        //   title: 'Legal',
        //   // Please do not remove the privacy and terms, it's a legal requirement.
        //   items: [
        //     {
        //       label: 'Privacy',
        //       href: 'https://opensource.facebook.com/legal/privacy/',
        //     },
        //     {
        //       label: 'Terms',
        //       href: 'https://opensource.facebook.com/legal/terms/',
        //     },
        //     {
        //       label: 'Data Policy',
        //       href: 'https://opensource.facebook.com/legal/data-policy/',
        //     },
        //     {
        //       label: 'Cookie Policy',
        //       href: 'https://opensource.facebook.com/legal/cookie-policy/',
        //     },
        //   ],
        // },
      ],
      logo: {
        alt: 'UnrealOS',
        src: 'img/oss_logo.png',
        href: 'https://unrealos.com',
      },
      // Please do not remove the credits, help to publicize Docusaurus :)
      copyright: `Copyright © ${new Date().getFullYear()} UnrealOS, Inc.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
