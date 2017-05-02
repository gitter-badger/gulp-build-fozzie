# gulp-build-fozzie :bear:

Gulp build tasks for use across Fozzie modules


## Setup

To integrate these tasks into your project you need to complete the following steps

1. Add `gulp-build-fozzie` to your project

    ```bash
    yarn add gulp-build-fozzie
    ```

1. Inside your gulpfile require and execute `gulp-build-fozzie`, you can [pass in options at this point to override the defaults](#default-options)

    ```js
    const gulp = require('gulp');

    require('gulp-build-fozzie')(/*options*/);
    ```

1. That's it! You can now run any of the Fozzie tasks.


## The Fozzie tasks

### `css:lint`

Lint all CSS (SCSS) in the `scss` directory.

### `scripts`

Runs the following tasks

#### `scripts:lint`

Lint all JavaScript in the `js` directory.

#### `scripts:test`

Runs any unit tests found under `src/js` using Jest.

#### `scripts:bundle`

Performs a variety of tasks including;

- ES2015 transpilation using Babel
- Bundle all code into a single file
- Generate sourcemap files
- Minify the JavaScript
- Add hashed version to file name

#### `clean:scripts`

Removes any JavaScript already in the `dist/js` directory.


## Default options

### `css`

#### `srcDir`

Type: `string`

Default: `src/scss`

The directory where your SCSS files reside.

#### `distDir`

Type: `string`

Default: `dist/css`

The bundled CSS file will be output to this directory.

#### `autoprefixer`

Type: `array`

Default: `['> 5%', 'last 2 versions', 'ie > 7', 'Safari >= 8']`

We are supporting the last 2 browsers, any browsers with >5% market share, and ensuring we support IE8+ with prefixes.

#### `sourcemaps`

Type: `boolean`

Default: [`isDev`](#other-options)

Turns sourcemaps on or off.

### `js`

#### `srcDir`

Type: `string`

Default: `src/js`

The directory where your es2015 files reside.

#### `srcFile`

Type: `string`

Default: `index.js`

The filename for the entry point to your es2015 code.

#### `distDir`

Type: `string`

Default: `dist/js`

The bundled JavaScript file will be output to this directory.

#### `distFile`

Type: `string`

Default: `script.js`

The filename for the bundled JavaScript.

### `img`

#### `srcDir`

Type: `string`

Default: `src/img`

The directory where your image files reside.

#### `distDir`

Type: `string`

Default: `dist/img`

The processed image files will be output to this directory.

### `misc`

#### `showFileSize`

Type: `boolean`

Default: `true`

Shoud file sizes be displayed when a task is run?

#### `showFiles`

Type: `boolean`

Default: `true`

Shoud file names be displayed when a task is run?

### `gulp`

#### `changeEvent`

Type: `function`

Event which fires when a file is modified.

#### `onError`

Type: `function`

Event which fires when an error occurs.

### Other options

There are two other options available; `isProduction` which is set to `true` when the `--prod` flag is passed, and `isDev` which is set to the opposite value of `isProduction`.
