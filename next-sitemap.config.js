/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://www.kompservisas.lt",
  generateRobotsTxt: true,
  exclude: ["/server-sitemap.xml"],
};
