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

    announcementBar: {
      id: 'pitch_deck',
      content: `
      Check out <a href="https://unrealos.com/static/pitchdeck/MetaEditor.pdf" target="_blank" rel="noopener noreferrer">Pitch Deck for investors</a>
      `,
      // backgroundColor: 'var(--ifm-color-primary)',
      // textColor: '#fff',
      isCloseable: true,
    },

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
          to: 'community',
          label: 'Community',
          position: 'left',
        },
        {
          href: 'https://portal.metaeditor.io/pricing/',
          label: 'Pricing',
          position: 'left',
        },
        {
          href: 'https://portal.metaeditor.io',
          label: 'Demos',
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
              label: 'Careers',
              to: 'careers',
            },
            {
              label: 'Pricing',
              href: 'https://portal.metaeditor.io/pricing/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Community',
              to: 'community',
            },
            {
              label: 'Stack Overflow',
              href: variables.contacts.stackoverflowUrl,
            },
            {
              label: 'Twitter',
              href: variables.contacts.twitterUrl,
            },
            {
              label: 'LinkedIn',
              href: variables.contacts.linkedIn,
            },
            {
              label: 'Discord',
              href: variables.contacts.discordUrl,
            },
          ],
        },
        {
          title: 'For Developers',
          items: [
            {
              label: 'Issues',
              href: variables.repo.issues,
            },
            {
              label: 'Feature Requests',
              href: '/feature-requests/',
            },
            ...variables.npmItems,
          ],
        },
        {
          title: 'Legal',
          // Please do not remove the privacy and terms, it's a legal requirement.
          items: [
            {
              label: 'Privacy',
              href: '/legal/privacy',
            },
            {
              label: 'Terms',
              href: '/legal/terms',
            },
            {
              label: 'Data Policy',
              href: '/legal/policy',
            },
            {
              label: 'Cookie Policy',
              href: '/legal/cookie-policy',
            },
          ],
        },
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
              label: '1.1.0',
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
  // clientModules: [
  //   require.resolve('./src/scripts/chat.js'),
  // ],
  scripts: [
    // {
    //   src: 'https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js',
    //   async: true,
    // },
  ],
  stylesheets: [
    "https://fonts.googleapis.com/icon?family=Material+Icons",
    'https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap',
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
