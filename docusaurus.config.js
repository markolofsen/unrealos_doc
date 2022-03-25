/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

const variables = require('./variables.js');

const VersionsArchived = require('./versionsArchived.json');
const ArchivedVersionsDropdownItems = Object.entries(VersionsArchived).splice(
  0,
  5,
);

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

    // announcementBar: {
    //   id: 'support_us',
    //   content: `
    //     <a href="/careers" rel="noopener noreferrer" style="display: block; text-decoration: auto;">
    //       <b>C++ programmer needed!</b>
    //     </a>
    //   `,
    //   backgroundColor: 'var(--ifm-color-primary)',
    //   textColor: '#fff',
    //   isCloseable: true,
    // },

    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    prism: {
      defaultLanguage: 'javascript',
    },
    navbar: {
      title: 'MetaEditor',
      logo: {
        alt: 'MetaEditor',
        src: 'img/logo.svg',
      },
      hideOnScroll: true,
      items: [

        // left

        {
          type: 'docsVersion',
          position: 'left',
          to: '/docs',
          label: 'Docs',
        },
        {
          to: 'pricing',
          label: 'Pricing',
          position: 'left',
        },
        {
          to: 'community',
          label: 'Community',
          position: 'left',
        },
        {
          href: 'https://ps.metaeditor.io',
          label: 'Demo',
          position: 'left',
        },

        // right

        {
          href: variables.repo.url,
          label: 'GitHub',
          position: 'right',
        },
        {
          type: 'docsVersionDropdown',
          position: 'right',
          dropdownActiveClassDisabled: true,
          dropdownItemsAfter: [
            ...ArchivedVersionsDropdownItems.map(
              ([versionName, versionUrl]) => ({
                label: versionName,
                href: versionUrl,
              }),
            ),
            // {
            //   href: 'https://v1.docusaurus.io',
            //   label: '1.x.x',
            // },
            {
              to: '/versions',
              label: 'All versions',
            },
          ],
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
            {
              label: 'Issues',
              href: variables.repo.issues,
            },
            {
              label: 'Feature Requests',
              href: '/feature-requests/',
            },
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
            // {
            //   label: 'Blog',
            //   to: 'blog',
            // },
            {
              label: 'Careers',
              to: 'careers',
            },
            {
              label: 'Community',
              to: 'community',
            },
            {
              label: 'Pricing',
              to: 'pricing',
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
          docLayoutComponent: '@theme/DocPage',
          docItemComponent: '@theme/DocItem',
          lastVersion: 'current',
          versions: {
            current: {
              label: '1.0.0',
              // path: '0.1.3',
              // banner: 'none' | 'unreleased' | 'unmaintained'; // the banner to show at the top of a doc of that version
              // badge: true,
            },
            // '1.0.0': {
            //     label: 'Android SDK v1.0.0',
            //     path: 'android-1.0.0',
            //     banner: 'unmaintained',
            // },
          },
          // onlyIncludeVersions: ['current', '0.1.2'],
          onlyIncludeVersions: ['current'],
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

  // https://docusaurus.io/docs/api/docusaurus-config#scripts
  clientModules: [
    require.resolve('./src/scripts/chat.js'),
  ],
  scripts: [
    // {
    //   src: 'https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js',
    //   async: true,
    // },
  ],
  stylesheets: [
    "https://fonts.googleapis.com/icon?family=Material+Icons",
  ],
  plugins: [
    [
      'ideal-image',
      {
        quality: 70,
        max: 1030, // max resized image's size.
        min: 640, // min resized image's size. if original is lower, use that size.
        steps: 2, // the max number of images generated between min and max (inclusive)
        // disableInDev: false,
      },
    ],
  ],

};
