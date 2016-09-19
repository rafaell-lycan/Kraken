# Kraken
A simple Jekyll boilerplate for front-end developers with everything you need to get started.

## Features
- [Jekyll](http://jekyllrb.com)
- [Gulp](http://gulpjs.com) setup for CSS, JavaScript, and HTML minification as well as static asset revisioning (appending content hash to filenames)
- [BrowserSync](http://www.browsersync.io) for rapid development
- [Sass](http://sass-lang.com) with Scalable and Modular Architecture (SMACSS) setup

## Structure

```
+-- gulp
|   +-- tasks
+-- src
|   +-- _drafts
|   +-- _includes
|   +-- _layouts
|   |   +-- default.html
|   +-- _posts
|   +-- assets
|   |   +-- styles
|   |   |   +-- base
|   |   |   |   +-- base.scss
|   |   |   |   +-- layout.scss
|   |   |   |   +-- variables.scss
|   |   |   +-- components
|   |   |   +-- modules
|   |   |   +-- main.scss
|   |   +-- images
|   |   +-- js
|   |   |   +-- main.js
|   |   +-- vendor
|   +-- .htaccess
|   +-- apple-touch-icon.png
|   +-- favico.ico
|   +-- favico.png
|   +-- 404.html
|   +-- 500.html
|   +-- feed.xml
|   +-- index.html
|   +-- robots.txt
+-- .gitignore
+-- Gemfile
+-- README.md
+-- _config.yml
+-- _config.build.yml
+-- gulpfile.js
+-- package.json
```

## Tasks

```gulp build```: directory but skips all compression tasks.
```gulp build --prod```: Builds all source files in the ```src``` directory with asset compression such as CSS/HTML/JavaScript minification.

## Common Issues

1. If ```node-sass``` is giving you errors, try rebuilding it by running ```$ npm rebuild node-sass```.
2. If ```gulp images``` is failing due to some error in ```gulp-imagemin```, try reinstalling it.

## License
This software is released under the [MIT License](http://opensource.org/licenses/MIT).
