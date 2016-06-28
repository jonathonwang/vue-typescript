const gulp = require('gulp');
const shell = require('gulp-shell');
const elixir = require('laravel-elixir');
require('tsify');
require('laravel-elixir-vueify');

elixir.config.js.browserify.plugins = [ { name: 'tsify' } ];

elixir( (mix) => {

  mix
    .copy('bower_components/bootstrap-sass/assets/stylesheets', 'src/sass/vendor/bootstrap')

    .browserify([
        'app.ts'
    ], 'dist/js/app.js')

    .sass('app.scss');
});
