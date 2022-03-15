/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

const variables = require('./variables.js');


/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: variables.seo.title,
  tagline: variables.seo.description,

  url: variables.homepage,
  baseUrl: '/',

  // # for gh-pages
  // url: 'https://markolofsen.github.io',
  // baseUrl: '/unrealos_doc/',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'markolofsen', // Usually your GitHub org/user name.
  projectName: 'unrealos_doc', // Usually your repo name.
  themeConfig: {
    image: variables.seo.ogImage,
    // metadata: [{name: 'twitter:card', content: 'summary'}],
    announcementBar: {
      id: 'support_us',
      content:
        `Tell us <a target="_blank" rel="noopener noreferrer" href="${variables.repo.issues}">how to improve</a> MetaEditor`,
      backgroundColor: '#fafbfc',
      textColor: '#091E42',
      isCloseable: false,
    },

    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
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
          href: variables.repo.url,
          label: 'GitHub',
          position: 'right',
        },

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
              href: variables.contacts.stackoverflowUrl,
            },
            {
              label: 'Twitter',
              href: variables.contacts.twitterUrl,
            },
            {
              label: 'Discord',
              href: variables.contacts.discordUrl,
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
              label: 'Contacts',
              href: variables.contacts.url,
            },
            {
              label: 'Issues',
              href: variables.repo.issues,
            },
          ],
        },
        {
          title: 'NPM',
          items: variables.npmItems,
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
        alt: variables.company.name,
        src: 'img/oss_logo.png',
        href: variables.company.url,
      },
      // Please do not remove the credits, help to publicize Docusaurus :)
      copyright: `Copyright © ${new Date().getFullYear()} ${variables.company.name}, Inc.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: variables.presets.editUrl,
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: variables.presets.editUrl,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: variables.config.googleTag,
          anonymizeIP: true,
        },
      },
    ],
  ],
};
