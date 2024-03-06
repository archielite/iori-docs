import { DefaultTheme } from 'vitepress'

export default [
  { text: 'Overview', link: '/iori/' },
  {
    text: 'Prologue',
    items: [
      { text: 'Release Notes', link: '/iori/releases' },
      { text: 'Upgrade Guide', link: '/iori/upgrade' },
    ]
  },
  {
    text: 'Getting Started',
    items: [
      { text: 'Installation', link: '/iori/installation' },
      { text: 'SSL', link: '/iori/ssl' },
      { text: 'License', link: '/iori/license' },
    ],
  },
  {
    text: 'Usage',
    items: [
      { text: 'Setup homepage',  link: '/iori/usage-homepage' },
      { text: 'Setup menus',  link: '/iori/usage-menus' },
      { text: 'Setup theme options',  link: '/iori/usage-theme-options' },
      { text: 'Widgets', link: '/iori/usage-widgets' },
      { text: 'Custom CSS/JS', link: '/iori/usage-custom-css-js' },
      { text: 'Translation', link: '/iori/usage-translation' },
      { text: 'Multi-language', link: '/iori/usage-multi-language' },
      { text: 'Currencies', link: '/iori/usage-currencies' },
      { text: 'Location', link: '/iori/usage-location' },
      { text: 'Analytics', link: '/iori/usage-analytics' },
      { text: 'Media - Setup Amazon S3', link: '/iori/usage-media-s3' },
      { text: 'Media - Setup BunnyCDN', link: '/iori/usage-media-bunnycdn' },
      { text: 'Media - Setup Wasabi', link: '/iori/usage-media-wasabi' },
      { text: 'Setup email', link: '/iori/usage-email' },
      { text: 'Invoice template', link: '/iori/invoice-template' },
    ],
  },
  {
    text: 'Development',
    items: [
      { text: 'Rename theme', link: '/iori/theme-rename' },
    ]
  }
] satisfies DefaultTheme.SidebarItem[]
