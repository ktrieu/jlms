const SEASONS = ["Winter", "Spring", "Fall"];

const termComparator = (aTerm, bTerm) => {
  const [aSeason, aYear] = aTerm.split(" ");
  const [bSeason, bYear] = bTerm.split(" ");

  if (aYear !== bYear) {
    return Number(aYear) < Number(bYear) ? -1 : 1;
  } else {
    const aIdx = SEASONS.indexOf(aSeason);
    const bIdx = SEASONS.indexOf(bSeason);
    if (aIdx < bIdx) {
      return -1;
    } else if (bIdx > aIdx) {
      return 1;
    } else {
      return 0;
    }
  }
};

module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget("static/");
  eleventyConfig.addPassthroughCopy("static/");

  eleventyConfig.addWatchTarget("CNAME");
  eleventyConfig.addPassthroughCopy("CNAME");

  eleventyConfig.addFilter("sortGroupByTerm", (values) => {
    let grouped = {};
    for (const alumni of values) {
      const term = alumni.data.term;
      if (!(term in grouped)) {
        grouped[term] = [];
      }
      grouped[term].push(alumni);
    }

    const entries = Object.entries(grouped).sort(([aTerm, _1], [bTerm, _2]) =>
      termComparator(aTerm, bTerm)
    );

    return entries.reverse();
  });
};
