module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget("static/");
  eleventyConfig.addPassthroughCopy("static/");

  eleventyConfig.addWatchTarget("CNAME");
  eleventyConfig.addPassthroughCopy("CNAME");
};
