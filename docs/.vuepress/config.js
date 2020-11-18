module.exports = {
  title: 'Open Source Energy News',
  base: '/',
  dest: 'dist',
  description: 'Find the latest news from the UK energy sector',
  logo: './assets/img/logo.png',
  theme: require.resolve('../../'),
  themeConfig: {
  pwa: true,
  serviceWorker: true,
  sources: [
      {
      name: 'bbc',
      avatar: '/assets/img/bbc.png',
      link: 'https://www.bbc.co.uk/news',
      linktext: 'source',
      },
      {
      name: 'carbon brief',
      avatar: '/assets/img/cb.png',
      link: 'https://www.carbonbrief.org/',
      linktext: 'source',
      },
      {
      name: 'current news',
      avatar: '/assets/img/current_news.png',
      link: 'https://www.current-news.co.uk/',
      linktext: 'source',
      },
      {
      name: 'renews',
      avatar: '/assets/img/renews.jpg',
      link: 'https://renews.biz/',
      linktext: 'source',
      },
      {
      name: 'offshorewind',
      avatar: '/assets/img/offshorewind.png',
      link: 'https://www.offshorewind.biz/',
      linktext: 'source',
      },
      {
      name: 'recharge news',
      avatar: '/assets/img/recharge.jpg',
      link: 'https://www.rechargenews.com/',
      linktext: 'source',
      },
      {
      name: 'green tech media',
      avatar: '/assets/img/gtm.png',
      link: 'https://www.greentechmedia.com/',
      linktext: 'source',
      },
      {
      name: 'energy live news',
      avatar: '/assets/img/energy_live_news.png',
      link: 'https://www.energylivenews.com/',
      linktext: 'source',
      },
      {
      name: 'guardian',
      avatar: '/assets/img/guardian.jpg',
      link: 'https://www.theguardian.com/uk',
      linktext: 'source',
      },
      {
      name: 'business green',
      avatar: '/assets/img/business_green.jpg',
      link: 'https://www.businessgreen.com/',
      linktext: 'source',
      },
    ],
    footer: {
      contact: [
        {
          type: 'github',
          link: 'https://github.com/AyrtonB/Energy-News-Site',
        },
        {
          type: 'linkedin',
          link: '#',
        },
        {
          type: 'mail',
          link: '#',
        },
        {
          type: 'twitter',
          link: 'https://twitter.com/AyrtonBourn',
        },
        {
          type: 'web',
          link: '#',
        }
      ],
      copyright: [
        {
          text: 'Licensed MIT.',
          link: 'https://bootstrapstarter.com/license/',
        },
      ],
    },

    sitemap: {
      hostname: 'https://github.com/AyrtonB/Energy-News-Site/'
    },
    comment: {
      service: 'disqus',
      shortname: 'energy-news',
    },
    feed: {
      canonical_base: 'https://github.com/AyrtonB/Energy-News-Site/',
    },
    smoothScroll: true
  },
}
