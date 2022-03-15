
const namespace = 'metaeditor'

module.exports = {
  namespace,
  homepage: 'https://metaeditor.io',
  repo: {
    url: `https://github.com/markolofsen/${namespace}`,
    git: `https://github.com/markolofsen/${namespace}.git`,
    issues: `https://github.com/markolofsen/${namespace}/issues`,
  },
  company: {
    name: 'UnrealOS',
    url: 'https://unrealos.com',
  },
  contacts: {
    url: 'https://unrealos.com/contacts/',
    discordUrl: 'https://discordapp.com/invite/eGHKuQ3BHM',
    stackoverflowUrl: `https://stackoverflow.com/questions/tagged/${namespace}`,
    twitterUrl: `https://twitter.com/${namespace}`,
  },
  config: {
    googleTag: 'G-MCJPYV0KFS',
  },
  presets: {
    editUrl: 'https://github.com/markolofsen/unrealos_doc/edit/main/',
  },
  npmItems: ['pixel-streaming', 'metaeditor', 'epic.js'].map(slug => ({
    label: slug,
    href: 'https://www.npmjs.com/package/'+slug,
  })),
}
