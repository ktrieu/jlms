module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget("jlms.css");
  eleventyConfig.addPassthroughCopy("jlms.css");

  eleventyConfig.addWatchTarget("static/");
  eleventyConfig.addPassthroughCopy("static/");
};
