

module.exports = {
  namespace: 'metaeditor',
  homepage: 'https://metaeditor.io',
  repo: {
    url: 'https://github.com/markolofsen/pixel_streaming_nextjs',
    git: 'https://github.com/markolofsen/pixel_streaming_nextjs.git',
    issues: 'https://github.com/markolofsen/pixel_streaming_nextjs/issues',
  },
  company: {
    name: 'UnrealOS',
    url: 'https://unrealos.com',
  },
  contacts: {
    url: 'https://unrealos.com/contacts/',
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
