import loaderUtils from 'loader-utils';
import unified from 'unified';
import markdown from 'remark-parse';
import remark2rehype from 'remark-rehype';
import raw from 'rehype-raw';
import format from 'rehype-format';
import stringify from 'rehype-stringify';


export default function loader(content) {
  if (typeof this.cacheable === 'function') {
    this.cacheable();
  }

  const callback = this.async();
  const options = loaderUtils.getOptions(this) || {};
  const mdProcessor = unified().use(markdown);

  if (options.preset) {
    let plugins;
    try {
      plugins = require(`remark-webpack-loader-preset-${options.preset}`);
    } catch (err) {
      if (err.code === 'MODULE_NOT_FOUND') {
        plugins = require(options.preset);
      } else {
        throw err;
      }
    }
    plugins.forEach((def) => {
      const pluginOpts = options[def.name];
      mdProcessor.use(def.plugin, pluginOpts);
    });
  }

  mdProcessor
    .use(remark2rehype, { allowDangerousHTML: true })
    .use(raw)
    .use(format)
    .use(stringify)
    .process(content, (err, output) => callback(err, String(output)));
}
