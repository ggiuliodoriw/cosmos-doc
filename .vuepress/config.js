module.exports = {
    title: 'COSMOS - BOSS',
    description: 'Documentación',
    themeConfig: {
      nav: [
        { text: 'Inicio', link: '/' },
        { text: 'Github', link: 'https://github.com/ggiuliodori/deportesRioCuarto-doc.git' }
      ],
      sidebar:[
        ['/', 'Inicio'],
        ['/docs/set_up.md', 'Set Up Project'],
        {
          title: 'Flujos',
          children: [ 
            ['/docs/flujos/adr0001.md', 'Foobots']
           ]
        },
        {
          title: 'Release',
          children: [ 
            ['/docs/release/est0001.md', 'BossApp']
           ]
        }
      ]
  }
}

  