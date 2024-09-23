export default {
  site: 'http://web',
  scanner: {
    robotsTxt: false,
    samples: 3,
  },
  ci: {
    budget: {
      'performance': 90,
      'accessibility': 90,
      'best-practices': 90,
      'seo': 90
    },
    buildStatic: true
  }
}
