/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

module.exports = {
  someSidebar: {
    'MetaEditor': [
      'description',
      'metaeditor/installation',
      {
        type: "category",
        label: "Settings",
        items: [
          'metaeditor/settings/config',
          'metaeditor/settings/streaming',
          'metaeditor/settings/deployment',
        ]
      },
      {
        type: "category",
        label: "Customization",
        items: [
          'metaeditor/customization/material',
          // {
          //   type: "category",
          //   label: "Another deaper category",
          //   items: [
          //     "guides/creating-a-new-app",
          //     "guides/building-and-releasing",
          //   ]
          // }
        ]
      },
      {
        type: "category",
        label: "Methods",
        items: [
          'metaeditor/methods/commands',
          // 'metaeditor/methods/callbacks',
        ]
      },
      {
        type: "category",
        label: "Extensions",
        items: [
          'metaeditor/extensions/metasnippets',
        ]
      },
      {
        type: "category",
        label: "PixelStreaming",
        items: [
          'pixel-streaming/demo',
          'pixel-streaming/settings',
        ]
      },
    ],
    'Developer tools': [
      'dev/hotkeys',
      'dev/localhost',
    ],
    'Cloud Streaming': [
      'streaming/desc',
      'streaming/spec',
      'streaming/faq',
    ]
  },
};
