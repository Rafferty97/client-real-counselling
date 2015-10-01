# Aphelion Website

A template built with express for website development.

### Development

Run `gulp build` to build compile and minify js and style code from modules into dist folder.

Run `gulp serve` to start a auto-reloading web server.

Run `gulp` to build and serve together.

### Deploy

Make sure you run `gulp build` before deploying.

### App Structure

```
.
+-- .gitignore
+-- README.md
+-- app
|   +-- app.js
|   +-- base
|   |   +-- scripts
|   |   |   +-- base.js
|   |   +-- styles
|   |   |   +-- base.sass
|   |   |   +-- base.scss
|   |   +-- views
|   |       +-- base.jade
|   |       +-- error.jade
|   |       +-- scripts.jade
|   |       +-- styles.jade
|   +-- blog
|   |   +-- controllers
|   |   |   +-- blog.controller.js
|   |   +-- models
|   |   |   +-- post.model.js
|   |   +-- scripts
|   |   |   +-- blog.js
|   |   +-- styles
|   |   |   +-- blog.sass
|   |   |   +-- blog.scss
|   |   +-- views
|   |       +-- blog.jade
|   |       +-- post.jade
|   +-- page
|       +-- controllers
|       |   +-- page.controller.js
|       +-- models
|       |   +-- page.model.js
|       +-- scripts
|       |   +-- page.js
|       +-- styles
|       |   +-- page.sass
|       |   +-- page.scss
|       +-- views
|           +-- index.jade
|           +-- page.jade
+-- bower.json
+-- bower_components
+-- config
|   +-- config.js
|   +-- firebase.js
|   +-- gulp.js
+-- gulpfile.js
+-- node_modules
+-- package.json
+-- server.js
```
