/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.fortygates.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/contact', '/privacy-policy', '/terms-of-service', '/cookie-policy', '/admin/*', '/private/*'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/contact', '/privacy-policy', '/terms-of-service', '/cookie-policy', '/admin/', '/private/', '/api/', '/_next/', '/static/'],
      },
    ],
    additionalSitemaps: [
      'https://www.fortygates.com/sitemap.xml',
    ],
  },
  changefreq: 'weekly',
  priority: 1.0,
}
