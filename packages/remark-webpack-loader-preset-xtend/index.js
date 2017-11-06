module.exports = [
  'remark-generic-extensions',
  'remark-external-links',
  'remark-gemoji-to-emoji',
  'remark-slug',
  'remark-toc',
  'remark-squeeze-paragraphs',
  'remark-highlight.js',
  'remark-kbd',
  'remark-grid-tables',
].map(name => {
  let plugin = require(name);
  plugin = typeof plugin === 'function' ? plugin : plugin.default;
  return { name: name, plugin: plugin };
});
