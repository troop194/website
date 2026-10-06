module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPassthroughCopy("_redirects");

  return {
    templateFormats: ["html", "njk"],
    htmlTemplateEngine: "njk",
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site",
    },
  };
};
