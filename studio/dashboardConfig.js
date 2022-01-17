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
                  buildHookId: '61e530f79105799bad12d567',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-5ggk9fib',
                  apiId: 'b788440e-e84f-40f4-9e37-fb72ead3a7b3'
                },
                {
                  buildHookId: '61e530f88eef0b2b91257992',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-djoq3rmv',
                  apiId: '0a3699ce-8ea2-4764-a879-c2cacae284f4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/davincecode/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-djoq3rmv.netlify.app', category: 'apps'}
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
