export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6166c40a2bb7ecdc92d3e2d4',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-i1d242a1',
                  apiId: '58f0f5d3-1a92-4f8e-b92b-ee347b2561c9'
                },
                {
                  buildHookId: '6166c40aeaa3ccf9ede755bb',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-dpjfw66j',
                  apiId: 'fdbf74ff-6c24-4785-a64f-5e95c32167d4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/JolanDeNef/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-dpjfw66j.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
