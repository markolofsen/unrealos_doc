
const namespace = 'metaeditor'
const homepage = 'https://metaeditor.io'

module.exports = {
  namespace,
  homepage,
  repo: {
    url: `https://github.com/markolofsen/${namespace}`,
    git: `https://github.com/markolofsen/${namespace}.git`,
    issues: `https://github.com/markolofsen/${namespace}/issues`,
  },
  company: {
    name: 'UnrealOS',
    url: 'https://unrealos.com',
    email: 'team@unrealos.com',
  },
  seo: {
    ogImage: '/img/og_default.jpg',
    title: 'React.js Pixel Streaming for Unreal Engine',
    description: `The Open Source MetaEditor offers a complete set of tools for professional developing and running the Unreal Engine’s Applications in browsers.`,
  },
  contacts: {
    url: 'https://unrealos.com/contacts/',
    discordUrl: 'https://discordapp.com/invite/eGHKuQ3BHM',
    stackoverflowUrl: `https://stackoverflow.com/questions/tagged/${namespace}`,
    twitterUrl: `https://twitter.com/metaunreal`,
    linkedIn: 'https://www.linkedin.com/company/unrealos/',
  },
  config: {
    googleTag: 'G-MCJPYV0KFS',
  },
  presets: {
    // editUrl: 'https://github.com/markolofsen/unrealos_doc/edit/main/',
  },
  npmItems: ['pixel-streaming', 'metaeditor'].map(slug => ({
    label: slug,
    href: 'https://www.npmjs.com/package/' + slug,
  })),
}
