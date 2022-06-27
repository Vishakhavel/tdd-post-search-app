import logo from './logo.svg'
import './App.css'
import Posts from './components/Posts'
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Fragment } from 'react'
const App = () => {
  const [error, setError] = useState(false)
  const [post, setPost] = useState([
    {
      userId: 1,
      id: 1,
      title:
        'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
    },
  ])

  const getPosts = (data) => {
    const postID = data
    const url = 'https://jsonplaceholder.typicode.com/posts/' + data

    return axios
      .get(url)
      .then((res) => {
        console.log(res.data)
        setPost(res.data)
        console.log(post)
      })
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    getPosts()
  }, [])

  // posts is going to be an array of objects returned from the API call.
  return (
    <Fragment>
      <h1>Welcome!</h1>
      <Posts data={post} makeAPICall={getPosts} />
    </Fragment>
  )
}

export default App
