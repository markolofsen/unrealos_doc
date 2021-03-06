---
title: Installation instructions
sidebar_label: Installation
---

import DocsMessage from "@site/src/components/DocsMessage.jsx"
import variables from '@site/variables.js';

1. Download the repository:
   
   <pre>
    <code>
      git clone {variables.repo.git}
    </code>
   </pre>

2. Open root directory and set up the environment:
   
   ```bash
   # Attention! Use the Yarn package manager to install
   yarn install
   ```

3. Set up the configuration:
   
   `/src/api/env.js`

4. Set up streaming:
   
   `/src/player/hooks/useStream/index.js`
   
   Attention! Please note that streaming running on the local machine does not have an ssl certificate. Therefore, when connecting, specify the host `http://127.0.0.1`

5. Run the project:
   
   ```bash
   yarn dev
   ```

<DocsMessage />
