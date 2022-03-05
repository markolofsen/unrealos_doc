---
id: ps_installation
title: Installation instructions
sidebar_label: Installation

---

1. Download the repository:

  `git clone repo`

2. Open root directory and set up the environment:

  `npm run install` or `yarn install`

3. Set up the configuration:

  `/src/api/env.js`

4. Set up streaming:

  `/src/custom/useStream.js`

  Attention! Please note that streaming running on the local machine does not have an ssl certificate. Therefore, when connecting, specify the host `http://127.0.0.1`

5. Run the project:

  `npm run start` or `yarn start`
