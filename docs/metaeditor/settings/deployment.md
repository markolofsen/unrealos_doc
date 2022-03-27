---
title: Deployment to GitHub pages
sidebar_label: Deployment
---



## Complete the steps one by one

1. First, create a repository on GitHub with a copy of MetaEditor

2. Change the [configuration](#configuration)

3. Run `yarn deploy` from the root directory

4. Open the `hg-pages` branch of your project in GitHub and create an empty file `.nojekyll` in the folders below:

   * `https://github.com/.../tree/gh-pages/`

   * `https://github.com/.../tree/gh-pages/_next/`

5. You can set your custom domain at `https://github.com/.../settings/pages`

6. Done!

<h2 id="configuration">Configuration</h2>

**Open `/.deploy/index.js` and set:**

* `username` — Your github account

* `reponame` — Repository name

```javascript
class Deploy {
  constructor() {
    //...
    this.repo_url = 'https://github.com/{username}/{reponame}'
  }
  //...
}
```



