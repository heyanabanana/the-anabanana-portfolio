import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '50f92610909a4ccd97f973690ba4de6d',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Ana Fernández',
  domain: 'nextjs-notion-starter-kit.transitivebullsh.it',
  author: 'Ana Fernández',

  // open graph metadata (optional)
  description: 'Example Next.js Notion Starter Kit Site',

  // social usernames (optional)
  twitter: 'hey_anabanana',
  github: 'heyanabanana',
  linkedin: 'anafernandezvaldes',

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  // navigationStyle: 'default'
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: 'Blog',
      pageId: '223c4ba2ad2b4bf2ba921e7c5afbe2a1',
      show: true
    },
    {
      title: 'Proyectos',
      pageId: 'd990f049f4e044fcb3852b286530b193',
      show: true
    },
    {
      title: 'Sobre mi',
      pageId: '6b902640ba844eb388ce1048ced46ff4',
      show: true
    },
    {
      title: 'Contacto',
      pageId: '707940381d3f426bb73ab46a92b63fbd',
      show: true
    }
  ]
})