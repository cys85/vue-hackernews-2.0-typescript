
module.exports = {
  loaders: {
    // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
    // the "scss" and "sass" values for the lang attribute to the right configs here.
    // other preprocessors should work out of the box, no loader config like this necessary.
    'less': 'vue-style-loader!css-loader!less-loader',
    'less': 'vue-style-loader!css-loader!less-loader?indentedSyntax',
  },
  // other vue-loader options go here
  // from vue config
  extractCSS: process.env.NODE_ENV === 'production',
  preserveWhitespace: false,
  postcss: [
    require('autoprefixer')({
      browsers: ['last 3 versions']
    })
  ]
}
