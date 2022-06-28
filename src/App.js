import './App.css'
import Posts from './components/Posts'
import Card from './components/Card'
import React, { useState, useEffect } from 'react'
import { Fragment } from 'react'
const App = () => {
  const [error, setError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [post, setPost] = useState([
    {
      userId: 1,
      id: 1,
      title:
        'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
    },
  ])

  async function getPosts(data) {
    const postID = data
    // console.log(postID)
    const url = 'https://jsonplaceholder.typicode.com/posts/' + data
    const repsonse = await fetch(url)
    const responseDataJSON = await repsonse.json()
    console.log(responseDataJSON)

    setPost(responseDataJSON)
  }

  return (
    <Fragment>
      <Posts postData={post} makeAPICall={getPosts} />
      {!isLoading && <Card postData={post} />}
      {isLoading && <p> Loading.... </p>}
    </Fragment>
  )
}

export default App
