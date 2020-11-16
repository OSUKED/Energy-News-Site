module.exports = {
  title: 'Energy News',
  base: '/',
  dest: 'dist',
  description: 'Latest news from the UK energy sector',
  logo: './assets/img/logo.png',
  theme: require.resolve('../../'),
  devtools: true,
  themeConfig: {
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
