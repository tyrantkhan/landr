## Goals

[ ] Only 1 config file (this should be built on init) or inferred
[ ] All build files should commit to only be committed to `gh-pages` branch
[ ] No extra dependencies should be required you if install lander as a system module


## ideas

```
www
  - /dist
    - bundle.js (bundled + minified js)
    - bundle.css (bundled css)
    - index.html
  - /images (users custom images)
  - /js (users custom js)
  - /scss (users custom scss)
  - /templates (users custom templates)
```


**How to handle async actions in lander.conf.js?**
1. Have a prebuild hook that runs async functions that get data then pass it to build?

**How to handle multiple pages?**
https://github.com/markdalgleish/static-site-generator-webpack-plugin
