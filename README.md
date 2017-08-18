<pre align="center">This is a work in progress... Feel free to contribute!</pre>

<div align="center">
  <img width="800" src="./src/img/header.png" alt="gulpflow" />
  <p>Design and build your very own modern front-end development workflow</p>
</div>

<div align="center">

[![forthebadge](http://forthebadge.com/images/badges/uses-js.svg)](https://gulpjs.com)
[![forthebadge](http://forthebadge.com/images/badges/60-percent-of-the-time-works-every-time.svg)](http://www.whoisjorge.me)

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

</div>


## Overview

This tool is for developers who are currently loading in resources in their code via multiple `script` calls and finding that dependency management, or even mantainment of project's architecture, is becoming _a little_ cumbersome as their webpages or applications start to grow.

_A modern starter kit that will introduce you into awesome **advanced front-end development tools** to write your very own workflows, as advanced as your needs require!_

### Highlights

- [X] ES2015 (ES6) through Babel
- [X] ESLint support
- [X] Browsersync with _hot reloading_
- [X] Sass module importer 
- [X] CSS/JS preprocessing
- [X] Autoprefixer _for the legacy_
- [X] Easy dependency management and usage!
- [X] Production-ready compressed build with image optimization
 
__*It can be easily configured and integrated into your own development environment and site or app structure!*__


## Getting Started

Install some amazing tools before continuing **~ latest versions**. These are specified on "requirements" section, just below this text you're reading on so happily :smile:

__Requirements:__

- [Node.js](https://nodejs.org)
- [npm](https://npmjs.com)
- [Gulp.js](https://gulpjs.com)


## Set up the project

Fork, clone or simply download this repository. The only thing that cares is the fact of install those lovely dependencies that make everything work beautifully:

```bash
git clone https://github.com/whoisjorge/gulpflow.git
cd gulpflow
npm i
```
You can also use `yarn` for dependencies management.


## Usage

Place everything inside `src/` folder. And remember to clean the existing ones by default on this repository.

### Start a development server

```sh
npm run gulpflow
```

Launch a new server and watch for changes on `localhost:8080`

### Build for production

```sh
npm run build
```

:rocket: Your website is now built on `dist/` folder and ready for the outside


## Resources

- [Gulp.js API documentation](https://github.com/gulpjs/gulp/blob/master/docs/API.md)
- [ESLint configuration](http://eslint.org/docs/user-guide/configuring)
- [Babel usage](https://babeljs.io/)


<!-- License -->
<div align="center"><a href="/LICENSE"><img src="http://mirrors.creativecommons.org/presskit/buttons/88x31/svg/cc-zero.svg" alt="CC0" /></a></div>
<!-- End -->