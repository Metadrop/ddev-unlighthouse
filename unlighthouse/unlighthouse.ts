/*
#ddev-generated
 */
export default {
  site: 'https://web',
  scanner: {
    robotsTxt: false,
    samples: 3,
  },
  chrome: {
    ignoreHTTPSErrors: true,
  },
  puppeteerOptions: {
    args: ['--ignore-certificate-errors', '--no-sandbox'],
  },
  ci: {
    budget: {
      'performance': 90,
      'accessibility': 90,
      'best-practices': 90,
      'seo': 90
    },
    buildStatic: true
  },
  serverUrl: "/",
  clientUrl: "/",
  apiUrl: "/api",
  websocketUrl: "/api/ws"
}
