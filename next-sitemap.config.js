/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: process.env.SITE_URL || 'https://joematkin.com',
  generateRobotsTxt: true,
  sitemapSize: 5000,
}
