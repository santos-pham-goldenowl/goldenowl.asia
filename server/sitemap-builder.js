const es2015 = require('babel-preset-es2015');
const presetReact = require('babel-preset-react');
const Sitemap = require('react-router-sitemap').default;

require('babel-register')({
  presets: [es2015, presetReact],
});

const router = require('../src/routes').default;

require.extensions['.css'] = () => null;

require.extensions['.png'] = () => null;

require.extensions['.svg'] = () => null;

require.extensions['.jpg'] = () => null;

const filterConfig = {
  isValid: false,
  rules: [/\www/],
};

function generateSitemap() {
  return (
    new Sitemap(router())
      .filterPaths(filterConfig)
      .build('http://goldenowl.asia')
      .save('../public/sitemap.xml')
  );
}

generateSitemap();
