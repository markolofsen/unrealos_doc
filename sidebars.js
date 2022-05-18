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
      'pixel-streaming/settings',
      'pixel-streaming/demo',
      {
        type: "category",
        label: "Methods",
        items: [
          'metaeditor/methods/commands',
          'metaeditor/methods/callbacks',
        ]
      },
      {
        type: "category",
        label: "DevPanel",
        items: [
          'metaeditor/devpanel/localhost',
          'metaeditor/devpanel/hotkeys',
          'metaeditor/devpanel/commands',
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
