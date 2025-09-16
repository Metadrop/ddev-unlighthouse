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
  serverUrl: "http://example.ddev.site:5678/",
  clientUrl: "http://example.ddev.site:5678/",
  apiUrl: "http://example.ddev.site:5678/api",
  websocketUrl: "ws://example.ddev.site:5678/api/ws"
}
