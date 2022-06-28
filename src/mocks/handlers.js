import { rest } from 'msw'

export const handlers = [
  rest.get('https://jsonplaceholder.typicode.com/posts/*', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        userId: 1,
        id: 1,
        title: 'returned title',
        body: 'returned body',
      })
    )
  }),
]
