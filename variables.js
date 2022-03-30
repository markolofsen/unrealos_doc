
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
    title: 'MetaEditor — Pixel Streaming for Unreal Engine (ReactJS)',
    description: `MetaEditor streamlines PixelStreaming development to allow businesses to easily deploy and customize their ReactJS application for Unreal Engine.`,
    // description: 'MetaEditor — helps integrate Unreal Engine v.5 in the browser. Allows you to send commands and get callbacks from the stream server with launched Unreal Engine.',
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
    // editUrl: 'https://github.com/markolofsen/unrealos_doc/edit/main/',
  },
  npmItems: ['pixel-streaming', 'metaeditor'].map(slug => ({
    label: slug,
    href: 'https://www.npmjs.com/package/' + slug,
  })),
}
