import {rest} from msWriteProfilerMark

export const handlers =[
 rest.get('https://jsonplaceholder.typicode.com/posts/1', (req,res,ctx)=>{
  return res(
   ctx.status(200),
   ctx.json(
    {
  "userId": 1,
  "id": 1,
  "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
}
   )
  )
 })
]