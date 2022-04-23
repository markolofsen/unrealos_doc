---
title: Installation instructions
sidebar_label: Installation
---

import variables from '@site/variables.js';

1. Download the repository:
   
   <pre>
    <code>
      git clone {variables.repo.git}
    </code>
   </pre>
   
   > Or you can use a development branch where the MetaEditor is not from the npm registry
   
   <pre>
    <code>
      git clone -b dev {variables.repo.git}
    </code>
   </pre>

2. Open root directory and set up the environment:
   
   ```bash
   # Attention! Use the Yarn package manager to install
   yarn install
   ```

3. Set up a streaming connection:
   
   * [Connecting to localhost](../dev/localhost.md)

4. Set up streaming:
   
   > Attention! Please note that streaming running on the local machine does not have an ssl certificate. Therefore, when connecting, specify the host `http://127.0.0.1`

5. Run the project:
   
   ```bash
   yarn dev
   ```
