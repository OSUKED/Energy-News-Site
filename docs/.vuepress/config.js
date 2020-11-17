module.exports = {
  title: 'Open Source Energy News',
  base: '/',
  dest: 'dist',
  description: 'Find the latest news from the UK energy sector',
  logo: './assets/img/logo.png',
  theme: require.resolve('../../'),
  themeConfig: {
  pwa: true,
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
      }
      {
      name: 'renews',
      avatar: '/assets/img/renews.jpg',
      link: 'https://renews.biz/',
      linktext: 'source',
      }
    ],
    footer: {
      contact: [
        {
          type: 'codepen',
          link: '#',
        },
        {
          type: 'facebook',
          link: '#',
        },
        {
          type: 'github',
          link: 'https://github.com/AyrtonB/Energy-News-Site',
        },
        {
          type: 'gitlab',
          link: '#',
        },
        {
          type: 'instagram',
          link: '#',
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
          type: 'messenger',
          link: '#',
        },
        {
          type: 'phone',
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
      shortname: 'demowebsite',
    },
    newsletter: {
      endpoint: 'https://wowthemes.us11.list-manage.com/subscribe/post?u=8aeb20a530e124561927d3bd8&id=8c3d2d214b'
    },
    feed: {
      canonical_base: 'https://github.com/AyrtonB/Energy-News-Site/',
    },
    smoothScroll: true
  },
}
