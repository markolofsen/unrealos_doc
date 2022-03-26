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
      // {
      //   "type": "link",
      //   "label": "Demo",
      //   "href": "https://ps.metaeditor.io"
      // },
      'reactjs/installation',
      'reactjs/config',
      'reactjs/streaming',
      'reactjs/deployment',
      {
        type: "category",
        label: "Customization",
        items: [
          'reactjs/ui/customization',
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
          'methods/commands',
          // 'methods/callbacks',
        ]
      },
      {
        type: "category",
        label: "PixelStreaming",
        items: [
          'nodejs/settings',
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
