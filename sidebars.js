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
    'Guide': [
      'guide/description',
      'guide/instructions',
      'guide/demo',
    ],
    'MetaEditor': [
      'metaeditor/installation',
      {
        type: "category",
        label: "Settings",
        items: [
          'metaeditor/settings/context_provider',
          'metaeditor/settings/api',
          'metaeditor/settings/update',
        ]
      },
      {
        type: "category",
        label: "Methods",
        items: [
          'metaeditor/methods/commands',
          'metaeditor/methods/commands_portal',
          'metaeditor/methods/callbacks',
        ]
      },
      {
        type: "category",
        label: "DevPanel",
        items: [
          'metaeditor/devpanel/localhost',
          'metaeditor/devpanel/hotkeys',
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
    'MetaClient': [
      'metaclient/description',
    ],
    'MetaCloud': [
      'metacloud/description',
      'metacloud/spec',
      'metacloud/faq',
    ]
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
  },
};
