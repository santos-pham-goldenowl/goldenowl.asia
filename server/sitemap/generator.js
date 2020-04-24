require('@babel/register')({
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',
  ],
});

const Sitemap = require('react-router-sitemap').default;
const router = require('./routes').default;

function generateSitemap() {
  return (
    new Sitemap(router)
      .build(process.env.SITE_URL)
      .save('./public/sitemap.xml')
  );
}

generateSitemap();
