const es2015 = require("babel-preset-es2015");
const presetReact = require("babel-preset-react");
require("babel-register")({
  presets: [es2015, presetReact],
});

const router = require("../src/routes").default;
const Sitemap = require("react-router-sitemap").default;

require.extensions[".css"] = () => {
  return null;
};

require.extensions[".png"] = () => {
  return null;
};

require.extensions[".svg"] = () => {
  return null;
};

require.extensions[".jpg"] = () => {
  return null;
};

const filterConfig = {
  isValid: false,
  rules: [/\www/],
};

function generateSitemap() {
  return (
    new Sitemap(router())
      .filterPaths(filterConfig)
      .build("http://goldenowl.asia")
      .save("../public/sitemap.xml")
  );
}

generateSitemap();
