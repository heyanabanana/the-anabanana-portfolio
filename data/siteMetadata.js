const siteMetadata = {
  title: '🍌 Hey!',
  author: 'Ana Fernández',
  headerTitle: '🍌 Hey!',
  description: 'Portfolio y apuntes sobre desarrollo frontend y diseño',
  language: 'es-us',
  theme: 'system', // system, dark or light
  siteUrl: 'https://heyanabanana.es',
  siteRepo: 'https://github.com/heyanabanana/the-anabanana-portfolio',
  siteLogo: '/static/images/logo.png',
  image: '/static/images/avatar.png',
  socialBanner: '/static/images/twitter-card.png',
  email: 'hola@heyanabanana.es',
  github: 'https://github.com/heyanabanana',
  twitter: 'https://twitter.com/hey_anabanana',
  linkedin: 'https://www.linkedin.com/in/anafernandezvaldes/',
  instagram: 'https://www.instagram.com/hey.anabanana/',

  locale: 'es-US',
  analytics: {
    // If you want to use an analytics provider you have to add it to the
    // content security policy in the `next.config.js` file.
    // supports plausible, simpleAnalytics, umami or googleAnalytics
    googleAnalyticsId: ENV.GOOGLE_ANALYTICS_ID, // e.g. UA-000000-2 or G-XXXXXXX
  },
}

module.exports = siteMetadata
