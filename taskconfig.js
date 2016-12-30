import { env as $env } from 'gulp-util';
import glob from 'glob';
import path from 'path';
import webpack from 'webpack';

// Supported CLI options.
const env = {
  debug: process.env.NODE_ENV === 'development'
};

const paths = {
  src : path.join(__dirname, 'src'),
  dest: path.join(__dirname, 'dist'),
};

const assets = {
  origin : '_assets',
  dest: 'assets',
};

export default {
  env: env,
  images: {
    entry: path.join(paths.src, assets.origin, 'images', '**', '*.{jpg,jpeg,gif,png,svg}'),
    output: path.join(paths.src, assets.dest , 'images'),
    imagemin: {
      progressive: true,
      interlaced: true
    }
  },
  svgs: {
    entry: path.join(paths.src, assets.origin, 'svgs', '**', '*.svg'),
    output: path.join(paths.src, assets.dest , 'svgs')
  },
  videos: {
    entry: path.join(paths.src, assets.origin, 'videos', '**', '*.{ogv,mp4}'),
    output: path.join(paths.src, assets.dest , 'videos')
  },
  fonts: {
    entry: path.join(paths.src, assets.origin, 'fonts', '**', '*.{eot,svg,ttf,woff,woff2}'),
    output: path.join(paths.src, assets.dest , 'fonts')
  },
  styles: {
    entry: path.join(paths.src, assets.origin, 'scss', '*.{sass,scss}'),
    output: path.join(paths.src, assets.dest , 'styles'),
    autoprefixer: {
      browsers: ['last 2 versions', '> 5%', 'IE 9']
    },
    options: {
      precision: 10,
      errLogToConsole: true
    }
  },
  scripts: {
    cache: env.debug,
    context: path.join(paths.src, assets.origin, 'scripts'),
    debug: env.debug,
    devtool: env.debug ? 'eval' : null,
    entry: {
      'vendor': glob.sync(path.join(paths.src, assets.origin, 'vendor', '**', '*.js')),
      'main': './main.js'
    },
    output: {
      path: path.join(paths.src, assets.dest , 'scripts'),
      publicPath: '/assets/scripts/',
      filename: '[name].min.js',
      chunkFilename: '[chunkhash].js'
    },
    module: {
      loaders: [{
        test: path.join(paths.src, assets.origin, 'vendor'),
        loader: 'imports?module=>false,define=>false,exports=>false,this=>window'
      },{
        test: /\.js/,
        loader: 'babel',
        include: path.join(paths.src, assets.origin, 'scripts'),
        exclude: /node_modules/
      }, {
        test: /\.yml/,
        loaders: [
          'json',
          'yaml'
        ],
      }, {
        test: /\.json/,
        loader: 'json',
      }],
      noParse: [
        new RegExp(`${path.join(paths.src, assets.origin, 'vendor')}.*.js$`)
      ]
    },
    resolve: {
      extensions: ['', '.js', '.json', '.yml'],
      root: [
        path.join(paths.src, assets.origin, 'scripts'),
      ],
      alias: {
        config: path.join(__dirname, 'config', process.env.NODE_ENV || "development"),
      },
    },
    plugins: [
      new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'),
      new webpack.optimize.OccurrenceOrderPlugin(),
      new webpack.optimize.AggressiveMergingPlugin(),
      new webpack.optimize.UglifyJsPlugin({
        minimize: !env.debug,
        sourceMap: env.debug,
        compress: {
          warnings: false
        },
        output: {
          comments: false
        }
      }),
    ]
  },
  rev: {
    entry: path.join(paths.dest, '**', '*.{css,jpg,jpeg,gif,png,svg,js,eot,svg,ttf,woff,woff2,ogv,mp4}'),
    output: paths.dest,
    manifestFile: 'rev-manifest.json',
    replace: path.join(paths.dest, '**', '*.{css,jpg,jpeg,gif,png,svg,js,html}')
  },
  watch: {
    entries: [{
      files: path.join(paths.src, assets.origin, 'images', '**', '*.{jpg,jpeg,gif,png,svg}'),
      tasks: ['images']
    }, {
      files: path.join(paths.src, assets.origin, 'svgs', '**', '*.svg'),
      tasks: ['svgs']
    }, {
      files: path.join(paths.src, assets.origin, 'fonts', '**', '*.{eot,svg,ttf,woff,woff2}'),
      tasks: ['fonts']
    }, {
      files: path.join(paths.src, assets.origin, 'videos', '**', '*.{ogv,mp4}'),
      tasks: ['videos']
    }, {
      files: path.join(paths.src, assets.origin, 'scss', '**', '*.{sass,scss}'),
      tasks: ['styles']
    }]
  }
};