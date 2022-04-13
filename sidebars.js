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
          'metaeditor/settings/upgrade',
        ]
      },
      {
        type: "category",
        label: "Customization",
        items: [
          // 'metaeditor/customization/mui/helper',
          {
            type: 'category',
            label: 'MUI',
            items: [
              'metaeditor/customization/mui/theme',
              'metaeditor/customization/mui/helper',
            ],
          },
        ],
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
        label: "Common extensions",
        items: [
          'metaeditor/common/hooks',
          'metaeditor/common/styles',
          'metaeditor/common/funcs',
          'metaeditor/common/helpers',
          'metaeditor/common/libs',
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
    'Uneal Engine': [
      {
        type: 'category',
        label: 'Preparation',
        items: [
          'unreal-engine/preparation/linux',
        ],
      },
    ],
    // collapsible: true,
    // collapsed: false,
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
