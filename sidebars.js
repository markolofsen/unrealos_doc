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
      'pixel-streaming/demo',
      {
        type: "category",
        label: "Settings",
        items: [
          'pixel-streaming/settings/installation',
          'pixel-streaming/settings/context_provider',
          'pixel-streaming/settings/api',
        ]
      },
      {
        type: "category",
        label: "Methods",
        items: [
          'pixel-streaming/methods/commands',
          'pixel-streaming/methods/commands_portal',
          'pixel-streaming/methods/callbacks',
        ]
      },
      {
        type: "category",
        label: "DevPanel",
        items: [
          'pixel-streaming/devpanel/localhost',
          'pixel-streaming/devpanel/hotkeys',
        ]
      },
    ],
    'MetaPortal': [
      'metaportal/description',
      'metaportal/commands',
    ],
    'MetaPlugin': [
      'metaplugin/description',
      'metaplugin/compilation',
    ],
    // 'Customization': [
    //   {
    //     type: "category",
    //     label: "Metalib",
    //     items: [
    //       'custom/metalib/installation',
    //       'custom/metalib/hooks',
    //       'custom/metalib/styles',
    //       'custom/metalib/funcs',
    //       'custom/metalib/helpers',
    //       'custom/metalib/libs',
    //       {
    //         type: "category",
    //         label: "Components",
    //         items: [
    //           'custom/metalib/components/formik',
    //         ]
    //       },
    //     ]
    //   },
    //   'custom/mui/helper',
    // ],
    'Cloud Streaming': [
      'streaming/desc',
      'streaming/spec',
      'streaming/faq',
    ]
  },
};
